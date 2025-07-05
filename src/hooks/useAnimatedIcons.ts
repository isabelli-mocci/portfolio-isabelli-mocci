import { useMemo } from 'react';
import { aboutTextConfig } from '../config/aboutText.config';
import { validateIconConfig } from '../utils/aboutText.utils';
import type { AboutTextConfig } from '../types/aboutText.types';

export const useAnimatedIcons = () => {
  const validatedIcons = useMemo(() => {
    const icons = aboutTextConfig.icons;
    const validatedIconsMap: Partial<AboutTextConfig['icons']> = {};

    Object.entries(icons).forEach(([key, iconConfig]) => {
      if (validateIconConfig(iconConfig)) {
        validatedIconsMap[key as keyof AboutTextConfig['icons']] = iconConfig;
      }
    });

    return validatedIconsMap as AboutTextConfig['icons'];
  }, []);

  return { icons: validatedIcons };
};
