import React from "react";

const Search = ({ searchTerm, onSearchBook }) => {
  
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Search Books..."
          value={searchTerm}
          onChange={(event)=> onSearchBook(event.target.value)}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </form>
    </div>
  );
};

export default Search;
