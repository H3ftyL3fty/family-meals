// Lib
import React from 'react';

interface PageLayoutProps {
  header: string;
}

export const PageLayout: React.FC<PageLayoutProps> = props => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        {props.header}
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};
