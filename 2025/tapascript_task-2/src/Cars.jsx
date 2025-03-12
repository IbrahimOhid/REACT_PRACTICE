import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import CheckList from "./CheckList";
import { CarList } from "./CarList";

const Cars = () => {
  const Cars = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];

  const [searchCar, setSearchCar] = useState('')
  return (
    <div className="container mx-auto p-24">
      <Header />
      <div className="grid grid-cols-2 items-center">
        <Search searchCar={searchCar} onSearchCar={setSearchCar} />
        <CheckList  />
      </div>
      <CarList cars={Cars} searchCar={searchCar} />
    </div>
  );
};

export default Cars;
