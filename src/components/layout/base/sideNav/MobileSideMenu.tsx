// Lib
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { Fragment, MouseEventHandler } from 'react';
// App
import { NAV_ITEMS } from './index';
import { NavItem } from './NavItem';

interface MobileSideMenuProps {
  isOpen: boolean;
  onClose: () => any;
}

export const MobileSideMenu: React.FC<MobileSideMenuProps> = props => {
  const { isOpen, onClose } = props;

  return (
    <Transition.Root
      as={Fragment}
      show={isOpen}
    >
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 md:hidden"
        onClose={onClose}
        open={isOpen}
        static
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <CloseSideBarButton
                  onClick={onClose}
                />
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 flex items-center px-4">
              <img
                alt="Workflow"
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              />
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2 space-y-1">
                {NAV_ITEMS.map(navItemProps => (
                  <NavItem
                    key={navItemProps.to}
                    onClick={onClose}
                    {...navItemProps}
                  />
                ))}
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

interface CloseSideBarButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CloseSideBarButton: React.FC<CloseSideBarButtonProps> = props => {
  const { onClick } = props;

  return (
    <button
      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      onClick={onClick}
    >
      <span className="sr-only">Close sidebar</span>
      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </button>
  );
};
