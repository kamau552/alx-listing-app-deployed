import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";


interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
   mobile?: boolean;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="flex items-center">
      {/* Search icon button - always visible */}
      <button
        className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-full text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiSearch className="w-4 h-4" />
      </button>

      {/* Input field - appears when clicked */}
      {isOpen && (
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder={placeholder || "Search..."}
          className="ml-2 px-3 py-1 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all duration-300"
          autoFocus
          onBlur={() => !searchValue && setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Search;