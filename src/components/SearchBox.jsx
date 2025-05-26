import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="flex items-center bg-gray-800 rounded px-3 py-2 w-full max-w-md mt-4">
      <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />
      <input
        className="bg-transparent focus:outline-none w-full text-white"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search for movies..."
      />
    </div>
  );
};

export default SearchBox;
