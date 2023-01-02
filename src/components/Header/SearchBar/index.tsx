import { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex w-11/12 items-center sm:w-auto">
      <MagnifyingGlassIcon className="absolute ml-1 h-5 w-5" />
      <input
        role="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full rounded-md border px-7 outline-none focus:ring-2 focus:ring-black/70 focus:ring-offset-2 sm:w-auto"
      />
    </div>
  );
};

export default SearchBar;
