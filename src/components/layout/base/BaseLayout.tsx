// Lib
import React, { useState } from 'react';
// App
import { AppBar } from './AppBar';
import { MobileSideMenu, SideNav } from './sideNav';

export const BaseLayout: React.FC = props => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <MobileSideMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SideNav />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <AppBar onClick={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
};
