import React from "react";

const Search = ({searchCar, onSearchCar}) => {
  return (
    <div>
      <form action="">
        <input
          type="email"
          id="email"
          name="email"
          value={searchCar}
          onChange={(event)=> onSearchCar(event.target.value)}
          className="w-full bg-white rounded border border-gray-300  py-1 px-3 "
        />
      </form>
    </div>
  );
};

export default Search;
