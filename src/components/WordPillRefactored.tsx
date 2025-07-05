import { motion } from 'framer-motion';
import type { WordPillProps } from '../types/wordPill.types';
import { useWordPillConfig } from '../hooks/useWordPillConfig';

export const WordPill = (props: WordPillProps) => {
  const { validatedProps, motionProps } = useWordPillConfig(props);

  return (
    <motion.div
      className={validatedProps.className}
      aria-label={validatedProps.text}
      {...motionProps}
    >
      {validatedProps.text}
    </motion.div>
  );
};

export default WordPill;
