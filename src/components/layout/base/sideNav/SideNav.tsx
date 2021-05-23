// Lib
import React from 'react';
// App
import { NAV_ITEMS } from './index';
import { NavItem } from './NavItem';

export const SideNav: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <img
              alt="Workflow"
              className="h-8 w-auto"
              src="http://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
            />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
              {NAV_ITEMS.map(navItemProps => (
                <NavItem key={navItemProps.name} {...navItemProps} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
