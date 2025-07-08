import React, { useCallback, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Logo from '../../assets/logo/logo-code-animated-dark.gif';

interface DraggableLogoProps {
  className?: string;
}

const DraggableLogo: React.FC<DraggableLogoProps> = ({ className }) => {
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    });
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (dragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      setPos({ x: newX, y: newY });
      controls.set({ x: newX, y: newY });
    }
  }, [dragging, offset, controls]);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
    setPos({ x: 0, y: 0 });
    controls.start({ x: 0, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } });
    document.body.style.cursor = '';
  }, [controls]);

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  return (
    <motion.div
      animate={controls}
      className={`absolute left-1/2 top-[25%] sm:top-[26%] z-10 select-none ${dragging ? 'scale-105' : ''} ${className || ''}`}
      style={{
        translateX: '-50%',
        translateY: '-50%',
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
      <img
        src={Logo}
        alt='Logo'
        className='h-20 md:h-24 w-auto mx-auto pointer-events-none'
        draggable={false}
      />
    </motion.div>
  );
};

export default DraggableLogo;
