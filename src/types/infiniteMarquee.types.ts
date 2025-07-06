export interface MarqueeItem {
  id: string;
  label: string;
}

export interface MarqueeConfiguration {
  speed: number;
  direction: 'left' | 'right';
  rotationAngle: number;
  duplicateCount: number;
}

export interface MarqueeStyleConfiguration {
  containerClassName: string;
  itemClassName: string;
  separatorClassName: string;
  separatorSymbol: string;
}

export interface InfiniteMarqueeProps {
  items: string[] | MarqueeItem[];
  configuration?: Partial<MarqueeConfiguration>;
  styleConfiguration?: Partial<MarqueeStyleConfiguration>;
  testId?: string;
}
