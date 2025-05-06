import { IconProps } from '../../atoms/icon/IconsProps';
import { LabelProps } from '../../atoms/label/LabelProps';

export interface NavItemProps {
  label?: LabelProps;
  icon?: IconProps;
  href: string;
  isActive?: boolean;
}
