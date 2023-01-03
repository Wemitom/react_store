import { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { classNames } from 'utils';

import SearchBar from './SearchBar';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <ul className="relative flex flex-row items-center gap-3 py-6">
        <li className="ml-16 cursor-pointer">Home</li>
        <li className="cursor-pointer">Categories</li>
        <li className="ml-auto mr-12 cursor-pointer sm:hidden">
          <MagnifyingGlassIcon
            className={classNames(
              'h-5 w-5 transition-color duration-200',
              show ? 'fill-gray-500' : 'fill-black'
            )}
            onClick={() => setShow(!show)}
          />
        </li>
        <li
          className={classNames(
            'sm:relative sm:top-auto sm:ml-auto flex justify-center mr-16 w-full sm:w-auto',
            show
              ? 'absolute -bottom-12 sm:bottom-auto bg-slate-200 sm:bg-white sm:h-auto h-12'
              : 'hidden sm:inline'
          )}
        >
          <SearchBar />
        </li>
      </ul>
    </header>
  );
};

export default Header;
