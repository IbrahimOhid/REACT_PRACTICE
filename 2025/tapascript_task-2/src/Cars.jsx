import React from "react";
import Header from "./Header";
import Search from "./Search";
import CheckList from "./CheckList";
import { CarList } from "./CarList";

const Cars = () => {
  return (
    <div className="container mx-auto p-24">
      <Header />
      <div className="grid grid-cols-2 items-center">
        <Search />
        <CheckList />
      </div>
      <CarList />
    </div>
  );
};

export default Cars;
