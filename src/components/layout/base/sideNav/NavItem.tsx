// Lib
import React, { MouseEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';
// App
import { classNames } from '../../../../utils';

export interface NavItemProps {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  label: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  to: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  onClick,
  to,
}) => {
  const location = useLocation();
  const isCurrent = location.pathname.split('/')[1] === to.split('/')[1];

  return (
    <Link
      className={classNames(
        isCurrent ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
      )}
      onClick={onClick}
      to={to}
    >
      <Icon
        aria-hidden="true"
        className={classNames(
          isCurrent ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
          'mr-4 flex-shrink-0 h-6 w-6'
        )}
      />
      {label}
    </Link>
  );
};
