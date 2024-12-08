import React from 'react';
import SearchLogo from './Logo/SearchLogo';

const SearchBar = () => {
  return (
    <div className="w-full md:w-full px-4">
      <form
        action="/search"
        method="GET"
        className="flex items-center rounded-sm shadow-sm bg-[#F9FAFB] w-3/4 h-10 px-1 md:px-4"
      >
        <input
          type="text"
          name="q"
          placeholder="Rechercher un produit"
          aria-label="Search box"
          className="flex-grow bg-transparent outline-none text-gray-800 text-[10px] md:text-base "
        />
        <button
          type="submit"
          aria-label="Search"
          className="text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <SearchLogo />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
