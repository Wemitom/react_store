import { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';

import { classNames } from 'utils';

import SearchBar from './SearchBar';

const Header = ({ setSearch }: { setSearch: (value: string) => void }) => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <ul className="relative flex flex-row items-center justify-between gap-3 py-6">
        <li className="ml-12 flex cursor-pointer flex-col items-center sm:ml-16">
          <HomeIcon className="h-8 w-8" onClick={() => navigate('/')} />
          <p className=" hidden sm:block">Home</p>
        </li>
        <li
          className={classNames(
            'ml-3 flex w-10 cursor-pointer flex-col items-center text-center sm:ml-6',
            pathname !== '/cart' ? '' : 'hidden'
          )}
          onClick={() => navigate('cart')}
        >
          <ShoppingCartIcon className="h-8 w-8" />
          <p className=" hidden sm:block">Cart</p>
        </li>
        <li
          className={classNames(
            'mr-12 cursor-pointer sm:ml-auto sm:mr-16 sm:hidden',
            pathname === '/' ? '' : 'hidden'
          )}
        >
          <MagnifyingGlassIcon
            className={classNames(
              'h-8 w-8 transition-color duration-200',
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
              : 'hidden sm:inline',
            pathname === '/' ? '' : 'sm:hidden hidden'
          )}
        >
          <SearchBar setSearch={setSearch} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
