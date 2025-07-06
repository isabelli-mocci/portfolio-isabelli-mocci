import type { StatusTheme } from '../types/statusIndicator.types';

export const STATUS_INDICATOR_THEME: StatusTheme = {
  available: {
    label: 'AVAILABLE',
    bgGradient: 'bg-gradient-to-r from-green-700/40 via-green-800/30 to-green-900/30',
    borderColor: 'border-green-400/30',
    textColor: 'text-green-300',
    dotColor: 'bg-green-500',
    pulseColor: 'bg-green-400',
  },
  busy: {
    label: 'BUSY',
    bgGradient: 'bg-gradient-to-r from-red-700/40 via-red-800/30 to-red-900/30',
    borderColor: 'border-red-400/30',
    textColor: 'text-red-300',
    dotColor: 'bg-red-500',
    pulseColor: 'bg-red-400',
  },
  away: {
    label: 'AWAY',
    bgGradient: 'bg-gradient-to-r from-yellow-700/40 via-yellow-800/30 to-yellow-900/30',
    borderColor: 'border-yellow-400/30',
    textColor: 'text-yellow-300',
    dotColor: 'bg-yellow-500',
    pulseColor: 'bg-yellow-400',
  },
  offline: {
    label: 'OFFLINE',
    bgGradient: 'bg-gradient-to-r from-gray-700/40 via-gray-800/30 to-gray-900/30',
    borderColor: 'border-gray-400/30',
    textColor: 'text-gray-300',
    dotColor: 'bg-gray-500',
    pulseColor: 'bg-gray-400',
  },
} as const;
