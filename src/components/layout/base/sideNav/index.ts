// Lib
import {
  CalendarIcon,
  ClipboardListIcon,
  CollectionIcon,
} from '@heroicons/react/outline';
// App
import { NavItemProps } from './NavItem';

export { MobileSideMenu } from './MobileSideMenu';
export { NavItem } from './NavItem'
export { SideNav } from './SideNav';

export const NAV_ITEMS: NavItemProps[] = [
  {
    current: true,
    href: '#',
    icon: CalendarIcon,
    name: 'Planner',
  },
  {
    current: false,
    href: '#',
    icon: CollectionIcon,
    name: 'Recipes',
  },
  {
    current: false,
    href: '#',
    icon: ClipboardListIcon,
    name: 'Ingredients',
  },
];
