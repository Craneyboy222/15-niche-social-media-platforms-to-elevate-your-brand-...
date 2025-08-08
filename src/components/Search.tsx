import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center border rounded-lg p-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="flex-grow p-2 focus:outline-none"
        placeholder="Search..."
        aria-label="Search"
      />
      <button onClick={handleSearch} className="p-2">
        <FaSearch aria-hidden="true" />
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default Search;
