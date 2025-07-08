const HeroRay = ({ className }: { className?: string }) => (
  <svg
    className={`w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 ${className || ''}`}
    viewBox='0 0 20 20'
    fill='none'
    stroke='#adff2f'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ display: 'inline', verticalAlign: 'middle' }}
  >
    <polyline points='9 2 4 11 10 11 7 18 16 7 10 7 13 2' />
  </svg>
);

export default HeroRay;
