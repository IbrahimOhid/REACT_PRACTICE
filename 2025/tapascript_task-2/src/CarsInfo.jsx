import React from "react";

const CarsInfo = ({ car }) => {
  const { title, brand, year, price, isPremium } = car;
  return (
    <div className="shadow p-5">
      <h1 className="font-semibold">{title}</h1>
      <h2>
        <span className="font-semibold">Brand:</span> {brand}
      </h2>
      <h3>
        <span className="font-semibold">Year:</span> {year}
      </h3>
      <h4>
        <span className="font-semibold">Price:</span> {price}
      </h4>
      <h5>
        <span className="font-semibold">IsPremium:</span> {isPremium}
      </h5>
    </div>
  );
};

export default CarsInfo;
