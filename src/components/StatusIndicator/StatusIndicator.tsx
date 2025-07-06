import React from 'react';
import type { StatusIndicatorProps } from '../../types/statusIndicator.types';
import { useStatusIndicator } from '../../hooks/useStatusIndicator';
import StatusPulse from './StatusPulse';
import StatusDot from './StatusDot';
import StatusText from './StatusText';

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status = 'available',
  customLabel,
  className,
  size = 'medium',
  animated = true,
  testId,
  ariaLabel,
}) => {
  const {
    statusConfig,
    containerClassName,
    pulseContainerClassName,
    dotClassName,
    textClassName,
    displayText,
    computedTestId,
    computedAriaLabel,
    finalSize,
    finalAnimated,
  } = useStatusIndicator({
    status,
    customLabel,
    className,
    size,
    animated,
    testId,
    ariaLabel,
  });

  return (
    <div
      className={containerClassName}
      role="status"
      aria-label={computedAriaLabel}
      data-testid={computedTestId}
    >
      <span className={pulseContainerClassName}>
        <StatusPulse
          pulseColor={statusConfig.pulseColor}
          size={finalSize}
          animated={finalAnimated}
        />
        <StatusDot
          dotColor={statusConfig.dotColor}
          dotStyles={dotClassName}
        />
      </span>
      <StatusText
        text={displayText}
        textColor={statusConfig.textColor}
        textStyles={textClassName}
      />
    </div>
  );
};

export default StatusIndicator;
