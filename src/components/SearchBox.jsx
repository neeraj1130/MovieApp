import React from "react";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className="p-2 rounded bg-gray-700 text-white w-full sm:w-1/2"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      placeholder="Type to search..."
    />
  );
};

export default SearchBox;
