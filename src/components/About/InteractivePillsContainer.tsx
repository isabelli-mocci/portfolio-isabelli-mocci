import { ABOUT_SECTION_CONFIG } from '../../config/aboutSection.config';
import { usePillsData } from '../../hooks/usePillsData';
import { PillRenderer } from './PillRenderer';

interface InteractivePillsContainerProps {
  compact?: boolean;
}

export const InteractivePillsContainer = ({ compact = false }: InteractivePillsContainerProps) => {
  const { layout } = ABOUT_SECTION_CONFIG;
  const { pillsWithPositions } = usePillsData({ compact });
  
  const containerStyles = compact ? {
    minWidth: '250px',
    width: '100%',
    maxWidth: '350px',
    height: '200px',
  } : {
    minWidth: layout.pills.container.minWidth,
    width: layout.pills.container.width,
    maxWidth: layout.pills.container.maxWidth,
    height: layout.pills.container.height,
  };
  
  return (
    <div
      className={compact ? "relative w-full h-full" : "relative flex-1 min-h-[150px] md:min-h-[200px] w-full mt-4 md:mt-0"}
      style={containerStyles}
    >
      <PillsArea>
        {pillsWithPositions.map(({ pill, position, index }) => (
          <PillRenderer
            key={pill.text}
            pill={pill}
            position={position}
            index={index}
          />
        ))}
      </PillsArea>
    </div>
  );
};

interface PillsAreaProps {
  children: React.ReactNode;
}

const PillsArea = ({ children }: PillsAreaProps) => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    {children}
  </div>
);
