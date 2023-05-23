import Link from 'next/link';
import React from 'react';

interface IHeaderProps {
  title: string;
  breadCrumbs?: { path: string; title: string }[];
  primaryAction?: () => void;
  primaryText?: string;
  secondaryAction?: () => void;
  secondaryText?: string;
}

const Header = ({
  title,
  breadCrumbs,
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryText,
}: IHeaderProps) => {
  return (
    <div className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {breadCrumbs && (
          <div>
            <nav className="sm:hidden" aria-label="Back">
              <Link
                href={breadCrumbs[0].path}
                className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
                Back
              </Link>
            </nav>
            <nav className="hidden sm:flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-4">
                {breadCrumbs.map((crumb, index) => (
                  <li key={crumb.path}>
                    <div className={`flex ${index > 0 ? 'items-center' : ''}`}>
                      {index > 0 && (
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <Link
                        href={crumb.path}
                        aria-current="page"
                        className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        {crumb.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {title}
            </h2>
          </div>
          <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
            {secondaryAction && secondaryText && (
              <button
                onClick={secondaryAction}
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                {secondaryText}
              </button>
            )}
            {primaryAction && primaryText && (
              <button
                onClick={primaryAction}
                type="button"
                className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {primaryText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
