import { motion } from 'framer-motion';
import type { WordPillProps } from '../types/wordPill.types';
import { useWordPillConfig } from '../hooks/useWordPillConfig';

export const WordPillModular = (props: WordPillProps) => {
  const { validatedProps, motionProps } = useWordPillConfig(props);

  return (
    <motion.div
      className={validatedProps.className}
      aria-label={validatedProps.text}
      {...motionProps}
    >
      <WordPillContent text={validatedProps.text} />
    </motion.div>
  );
};

const WordPillContent = ({ text }: { text: string }) => (
  <span>{text}</span>
);

export default WordPillModular;
