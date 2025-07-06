import { useMemo } from 'react';
import type { StatusType, StatusConfig } from '../types/statusIndicator.types';
import { STATUS_INDICATOR_THEME } from '../config/statusIndicator.config';
import { STATUS_INDICATOR_STYLES } from '../styles/statusIndicator.styles';
import { STATUS_INDICATOR_CONSTANTS } from '../constants/statusIndicator.constants';
import { 
  combineClassNames, 
  validateStatus, 
  createTestId, 
  createAriaLabel,
  sanitizeCustomLabel
} from '../utils/statusIndicator.utils';

interface UseStatusIndicatorProps {
  status?: StatusType;
  customLabel?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  testId?: string;
  ariaLabel?: string;
}

interface UseStatusIndicatorReturn {
  statusConfig: StatusConfig;
  containerClassName: string;
  pulseContainerClassName: string;
  dotClassName: string;
  textClassName: string;
  displayText: string;
  computedTestId: string;
  computedAriaLabel: string;
  finalStatus: StatusType;
  finalSize: NonNullable<UseStatusIndicatorProps['size']>;
  finalAnimated: boolean;
}

export const useStatusIndicator = ({
  status,
  customLabel,
  className,
  size,
  animated,
  testId,
  ariaLabel,
}: UseStatusIndicatorProps): UseStatusIndicatorReturn => {
  const finalStatus = useMemo((): StatusType => {
    return validateStatus(status) 
      ? status 
      : STATUS_INDICATOR_CONSTANTS.DEFAULT_STATUS as StatusType;
  }, [status]);

  const finalSize = useMemo(() => {
    return size || STATUS_INDICATOR_CONSTANTS.DEFAULT_SIZE as NonNullable<UseStatusIndicatorProps['size']>;
  }, [size]);

  const finalAnimated = useMemo(() => {
    return animated ?? STATUS_INDICATOR_CONSTANTS.DEFAULT_ANIMATED;
  }, [animated]);

  const statusConfig = useMemo(() => {
    return STATUS_INDICATOR_THEME[finalStatus];
  }, [finalStatus]);

  const containerClassName = useMemo(() => {
    return combineClassNames(
      STATUS_INDICATOR_STYLES.container.base,
      STATUS_INDICATOR_STYLES.container.sizes[finalSize],
      statusConfig.bgGradient,
      statusConfig.borderColor,
      className
    );
  }, [finalSize, statusConfig, className]);

  const pulseContainerClassName = useMemo(() => {
    return combineClassNames(
      STATUS_INDICATOR_STYLES.pulseContainer.base,
      STATUS_INDICATOR_STYLES.pulseContainer.sizes[finalSize]
    );
  }, [finalSize]);

  const dotClassName = useMemo(() => {
    return combineClassNames(
      STATUS_INDICATOR_STYLES.dot.base,
      STATUS_INDICATOR_STYLES.dot.sizes[finalSize]
    );
  }, [finalSize]);

  const textClassName = useMemo(() => {
    return combineClassNames(
      STATUS_INDICATOR_STYLES.text.base,
      STATUS_INDICATOR_STYLES.text.sizes[finalSize]
    );
  }, [finalSize]);

  const displayText = useMemo(() => {
    return sanitizeCustomLabel(customLabel) || statusConfig.label;
  }, [customLabel, statusConfig.label]);

  const computedTestId = useMemo(() => {
    return createTestId(testId);
  }, [testId]);

  const computedAriaLabel = useMemo(() => {
    return createAriaLabel(finalStatus, customLabel, ariaLabel);
  }, [finalStatus, customLabel, ariaLabel]);

  return {
    statusConfig,
    containerClassName,
    pulseContainerClassName,
    dotClassName,
    textClassName,
    displayText,
    computedTestId,
    computedAriaLabel,
    finalStatus,
    finalSize,
    finalAnimated,
  };
};
