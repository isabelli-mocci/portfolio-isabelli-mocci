import type { ContactButtonVariant } from '../types/contact-button.types';
import { COMPONENT_BORDER_RADIUS } from '../constants/borderRadius.constants';

export const createButtonVariant = (): ContactButtonVariant => ({
  container: [
    'relative',
    'inline-flex',
    'h-10 md:h-11',
    'w-auto',
    'overflow-hidden',
    COMPONENT_BORDER_RADIUS.CONTACT_BUTTON,
    'p-[1px]',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-[#adff2f]/20',
    'group',
    'transition-all',
    'duration-500',
    'ease-[cubic-bezier(0.4,0,0.2,1)]',
    'hover:scale-[1.02]',
    'hover:-translate-y-0.5',
    'active:scale-[0.98]',
    'active:transition-transform',
    'active:duration-150',
    'backdrop-blur-xl',
    'will-change-transform',
  ].join(' '),

  background: [
    'absolute',
    'inset-0',
    'rounded-2xl',
    'bg-gradient-to-r',
    'from-[#adff2f]/20',
    'via-[#adff2f]/30',
    'to-[#adff2f]/20',
    'opacity-0',
    'group-hover:opacity-100',
    'transition-all',
    'duration-500',
    'ease-out',
    'blur-sm',
    'group-hover:blur-none',
  ].join(' '),

  content: [
    'relative',
    'inline-flex',
    'h-full',
    'w-full',
    'cursor-pointer',
    'items-center',
    'justify-center',
    COMPONENT_BORDER_RADIUS.CONTACT_BUTTON,
    'bg-gradient-to-r',
    'from-white/[0.03]',
    'via-white/[0.06]',
    'to-white/[0.03]',
    'backdrop-blur-2xl',
    'backdrop-saturate-150',
    'border',
    'border-white/[0.08]',
    'px-4 md:px-5',
    'py-2',
    'text-sm md:text-base',
    'font-medium',
    'text-white/90',
    'gap-2',
    'z-10',
    'transition-all',
    'duration-400',
    'ease-out',
    'group-hover:bg-gradient-to-r',
    'group-hover:from-white/[0.06]',
    'group-hover:via-white/[0.1]',
    'group-hover:to-white/[0.06]',
    'group-hover:border-white/[0.15]',
    'group-hover:text-black',
    'group-hover:shadow-[0_8px_32px_rgba(173,255,47,0.15)]',
    'supports-[backdrop-filter]:bg-gradient-to-r',
    'supports-[backdrop-filter]:from-white/[0.03]',
    'supports-[backdrop-filter]:via-white/[0.06]',
    'supports-[backdrop-filter]:to-white/[0.03]',
  ].join(' '),

  overlay: [
    'absolute',
    'inset-0',
    COMPONENT_BORDER_RADIUS.CONTACT_BUTTON,
    'ring-1',
    'ring-white/[0.05]',
    'pointer-events-none',
    'transition-all',
    'duration-400',
    'group-hover:ring-[#adff2f]/20',
    'group-hover:ring-2',
  ].join(' '),
});

export const createIconTransformClasses = (): string => [
  'inline-block',
  'transition-all',
  'duration-400',
  'ease-[cubic-bezier(0.4,0,0.2,1)]',
  'group-hover:translate-x-1',
  'group-hover:scale-110',
  'group-hover:text-black',
  'will-change-transform',
].join(' ');
