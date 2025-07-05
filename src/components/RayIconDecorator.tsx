import { ABOUT_SECTION_CONFIG } from '../config/aboutSection.config';
import RayIcon from '../assets/icons/ray.svg';

interface RayIconDecoratorProps {
  size?: string;
}

export const RayIconDecorator = ({ 
  size = ABOUT_SECTION_CONFIG.layout.rayIcon.size 
}: RayIconDecoratorProps) => (
  <span
    style={{
      position: 'absolute',
      left: ABOUT_SECTION_CONFIG.layout.rayIcon.position.left,
      top: ABOUT_SECTION_CONFIG.layout.rayIcon.position.top,
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: 2,
    }}
  >
    <img
      src={RayIcon}
      alt=""
      style={{ width: size, height: size }}
    />
  </span>
);
