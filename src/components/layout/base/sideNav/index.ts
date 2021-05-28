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
    icon: CalendarIcon,
    label: 'Planner',
    to: '/planner',
  },
  {
    icon: CollectionIcon,
    label: 'Recipes',
    to: '/recipes',
  },
  {
    icon: ClipboardListIcon,
    label: 'Ingredients',
    to: '/ingredients',
  },
];
