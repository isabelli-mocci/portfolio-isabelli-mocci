import React from 'react';
import type { HeadingTextProps } from '../../types/heroHeading.types';
import { createHeadingClasses } from '../../styles/heroHeading.styles';

const HeadingText: React.FC<HeadingTextProps> = ({
  children,
  variant,
  className,
}) => {
  const headingClasses = createHeadingClasses(variant, className);

  return (
    <h1 className={headingClasses}>
      {children}
    </h1>
  );
};

export default HeadingText;
