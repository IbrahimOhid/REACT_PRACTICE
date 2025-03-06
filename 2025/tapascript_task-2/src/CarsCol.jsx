import React from "react";
import CarsInfo from "./CarsInfo";

const CarsCol = ({ car }) => {
  return (
    <div>
      <CarsInfo car={car} />
    </div>
  );
};

export default CarsCol;
