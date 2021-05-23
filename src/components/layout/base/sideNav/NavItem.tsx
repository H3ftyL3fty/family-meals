// Lib
import React from 'react';
// App
import { classNames } from '../../../../utils';

export interface NavItemProps {
  current: boolean;
  href: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  name: string;
}

export const NavItem: React.FC<NavItemProps> = props => {
  const { current, href, icon: Icon, name } = props;

  return (
    <a
      className={classNames(
        current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
      )}
      key={name}
      href={href}
    >
      <Icon
        aria-hidden="true"
        className={classNames(
          current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
          'mr-4 flex-shrink-0 h-6 w-6'
        )}
      />
      {name}
    </a>
  );
};