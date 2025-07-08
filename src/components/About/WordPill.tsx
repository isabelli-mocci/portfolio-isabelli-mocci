import { motion } from 'framer-motion';
import type { WordPillProps } from '../../types/wordPill.types';
import { useWordPillConfig } from '../../hooks/useWordPillConfig';

export const WordPill = (props: WordPillProps) => {
  const { validatedProps, motionProps } = useWordPillConfig(props);

  return (
    <motion.div
      className={validatedProps.className}
      aria-label={validatedProps.text}
      {...motionProps}
    >
      <div className="flex items-center gap-1.5">
        {props.icon && (
          <props.icon className="w-3 h-3 flex-shrink-0" />
        )}
        <span>{validatedProps.text}</span>
      </div>
    </motion.div>
  );
};

export default WordPill;
