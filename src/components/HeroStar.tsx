// path: src/components/HeroStar.tsx

const HeroStar = ({ className }: { className?: string }) => (
  <svg
    className={`animate-spin-slow ${className ?? ''}`}
    width='36'
    height='36'
    viewBox='0 0 72 72'
    fill='none'
    stroke='#adff2f'
    strokeWidth='3'
    strokeLinejoin='round'
    style={{ display: 'inline', verticalAlign: 'middle' }}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='
      M36 8
      Q40 28 64 36
      Q40 44 36 64
      Q32 44 8 36
      Q32 28 36 8
      Z
    '
    />
  </svg>
);

export default HeroStar;
