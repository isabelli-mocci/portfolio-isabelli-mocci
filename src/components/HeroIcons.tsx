import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const RayIcon: React.FC<IconProps> = ({ className = '', size = 18 }) => (
  <svg
    className={`transition-transform duration-[400ms] cubic-bezier-[0.4,2,0.6,1] group-hover:rotate-[-25deg] group-hover:scale-115 ${className}`}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.3 1.046a1 1 0 0 1 .7 1.054l-.3 5.9h4.8a1 1 0 0 1 .8 1.6l-8 10.5c-.7.9-2.1.2-1.9-.9l1.3-6.2H3.1a1 1 0 0 1-.8-1.6l7-10.5a1 1 0 0 1 2-.054z" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = '', size = 18 }) => (
  <svg
    className={`transition-transform duration-300 cubic-bezier-[0.4,2,0.6,1] group-active:translate-y-0.5 group-active:scale-y-[0.1] ${className}`}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke="#adff2f"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g className="transition-transform duration-[600ms] cubic-bezier-[0.4,1,0.10,1] group-hover:translate-y-0.5">
      <path d="M10 3v7" />
      <path d="M7 9l3 3 3-3" />
    </g>
    <rect x="4" y="16" width="12" height="2" rx="1" fill="#adff2f" />
  </svg>
);
