// Lib
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
// App
import kitchen_small from '../img/kitchen_small.jpg';

export const AuthPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <div className="relative py-16 bg-white">
        <div
          aria-hidden="true"
          className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
        />
        <div className="max-w-7xl mx-auto bg-primary-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <img
                    alt="kitchen"
                    className="object-cover object-center rounded-3xl shadow-2xl"
                    src={kitchen_small}
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-primary-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                aria-hidden="true"
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
              >
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-primary-500" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-primary-500" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
              </div>

              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 xm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2
                  className="text-3xl font-extrabold text-white"
                  id="join-heading"
                >
                  Please sign in
                </h2>
                <p className="text-lg text-white">
                  Save your favorite recipes. Plan your week. Create your grocery list.
                </p>
                <button
                  className="block w-full py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-primary-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:inline-block sm:w-auto"
                  onClick={loginWithRedirect}
                >
                  Sign in with Auth0
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
