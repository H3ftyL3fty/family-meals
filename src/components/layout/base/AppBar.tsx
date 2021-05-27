// Lib
import { useAuth0 } from '@auth0/auth0-react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuAlt2Icon } from '@heroicons/react/outline';
import React, { Fragment, MouseEventHandler } from 'react';
// App
import { classNames } from '../../../utils';

interface AppBarProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const AppBar: React.FC<AppBarProps> = ({ onClick }) => {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:indigo-500 md:hidden"
        onClick={onClick}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          {/* Eventual search field */}
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

const ProfileDropdown: React.FC = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const handleAuthButtonClick: MouseEventHandler<HTMLButtonElement> = async () => {
    if (isAuthenticated) {
      logout({
        client_id: process.env.REACT_APP_AUTH0_CLIENTID,
        returnTo: window.location.origin,
      });
      return;
    }

    await loginWithRedirect();
  };

  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              static
            >
              <UserMenuItem
                name={`Sign ${isAuthenticated ? 'out' : 'in'}`}
                onClick={handleAuthButtonClick}
              />
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

interface UserMenuItemProps {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ name, onClick }) => {
  return (
    <Menu.Item key={name}>
      {({ active }) => (
        <button
          className={classNames(
            active ? 'bg-gray-100' : '',
            'block px-4 py-2 w-full text-sm text-left text-gray-700'
          )}
          onClick={onClick}
        >
          {name}
        </button>
      )}
    </Menu.Item>
  );
};
