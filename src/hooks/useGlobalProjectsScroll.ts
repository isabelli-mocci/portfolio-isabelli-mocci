import { useRef, useEffect, useCallback } from 'react';

interface UseGlobalProjectsScrollOptions {
  wheelSensitivity?: number;
  onReachEnd?: () => void;
  onReachStart?: () => void;
}

export const useGlobalProjectsScroll = (options: UseGlobalProjectsScrollOptions = {}) => {
  const { wheelSensitivity = 2.5, onReachEnd, onReachStart } = options;
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastEndReachTime = useRef(0);
  const lastStartReachTime = useRef(0);
  const isScrollingProjects = useRef(false);

  const handleGlobalWheel = useCallback((e: WheelEvent) => {
    if (!scrollRef.current || !sectionRef.current) return;

    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;
    const sectionRect = section.getBoundingClientRect();
    const scrollContainerRect = scrollContainer.getBoundingClientRect();
    
    // Verificar se a seção está visível na viewport
    const isInViewport = sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0;
    
    if (!isInViewport) return;

    // Verificar se estamos especificamente na área do container de scroll (onde estão os cards)
    // O scroll container é onde realmente ficam os cards
    const scrollContainerCenter = scrollContainerRect.top + scrollContainerRect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    
    // Só ativa quando o container de cards está próximo do centro da viewport
    const isInScrollContainerArea = Math.abs(scrollContainerCenter - viewportCenter) < window.innerHeight * 0.3 &&
                                   scrollContainerRect.top <= window.innerHeight * 0.8 && 
                                   scrollContainerRect.bottom >= window.innerHeight * 0.2;

    if (isInScrollContainerArea && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      
      const delta = e.deltaY;
      const scrollAmount = delta * wheelSensitivity;
      
      // Verificar posições de início e fim
      const isAtStart = scrollContainer.scrollLeft <= 10;
      const isAtEnd = scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth - 10);
      const isTryingToScrollRight = scrollAmount > 0;
      const isTryingToScrollLeft = scrollAmount < 0;
      const now = Date.now();
      
      // Se estiver no início e tentar rolar para a esquerda, permite o scroll vertical normal
      if (isAtStart && isTryingToScrollLeft) {
        const timeSinceLastStartTrigger = now - lastStartReachTime.current;
        if (onReachStart && timeSinceLastStartTrigger > 1500) {
          lastStartReachTime.current = now;
          setTimeout(() => {
            onReachStart();
          }, 150);
          return;
        }
        // Se não ativou o callback, permite scroll vertical normal
        return;
      }
      
      // Se estiver no final e tentar rolar para a direita, vai para próxima seção
      if (isAtEnd && isTryingToScrollRight) {
        const timeSinceLastEndTrigger = now - lastEndReachTime.current;
        if (onReachEnd && timeSinceLastEndTrigger > 1500) {
          lastEndReachTime.current = now;
          setTimeout(() => {
            onReachEnd();
          }, 150);
          return;
        }
        // Se não ativou o callback, permite scroll vertical normal
        return;
      }
      
      // Scroll horizontal normal dos projetos
      isScrollingProjects.current = true;
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'auto' // Mais fluido que 'smooth'
      });
      
      // Reset flag depois de um tempo
      setTimeout(() => {
        isScrollingProjects.current = false;
      }, 100);
    }
  }, [wheelSensitivity, onReachEnd, onReachStart]);

  useEffect(() => {
    // Adicionar listener global para capturar todos os eventos de wheel
    const handleWheel = (e: WheelEvent) => {
      handleGlobalWheel(e);
    };

    // Usar window para capturar todos os eventos
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleGlobalWheel]);

  return { scrollRef, sectionRef, isScrollingProjects };
};
