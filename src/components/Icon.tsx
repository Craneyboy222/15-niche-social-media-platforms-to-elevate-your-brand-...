import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  ariaLabel?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 24, color = 'currentColor', ariaLabel }) => (
  <IconComponent size={size} color={color} aria-label={ariaLabel} />
);

export default Icon;
