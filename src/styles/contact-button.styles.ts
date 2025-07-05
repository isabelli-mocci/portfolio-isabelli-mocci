import type { ButtonVariant } from '../types/contact-button.types';

export const createButtonVariant = (): ButtonVariant => ({
  container: [
    'relative',
    'inline-flex',
    'h-10',
    'w-auto',
    'overflow-hidden',
    'rounded-full',
    'p-[1px]',
    'focus:outline-none',
    'group',
    'active:scale-95',
    'transition-transform',
  ].join(' '),

  background: [
    'absolute',
    'inset-[-1000%]',
    'animate-[spin_2s_linear_infinite]',
    'bg-[conic-gradient(from_90deg_at_50%_50%,#adff2f_0%,#7fff00_25%,#1a3d00_50%,#eaffc2_75%,#adff2f_100%)]',
    'opacity-90',
    'group-hover:opacity-100',
    'transition-opacity',
    'duration-300',
  ].join(' '),

  content: [
    'inline-flex',
    'h-full',
    'w-full',
    'cursor-pointer',
    'items-center',
    'justify-center',
    'rounded-full',
    'bg-bg-dark',
    'px-5',
    'text-sm',
    'font-medium',
    'text-white',
    'gap-2',
    'relative',
    'z-10',
    'duration-200',
  ].join(' '),

  overlay: [
    'absolute',
    'inset-0',
    'rounded-full',
    'ring-1',
    'pointer-events-none',
  ].join(' '),
});

export const createIconTransformClasses = (): string => [
  'inline-block',
  'transition-transform',
  'duration-500',
  'group-hover:translate-x-2',
  'group-hover:-translate-y-2',
].join(' ');
