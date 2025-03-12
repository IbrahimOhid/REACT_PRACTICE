import React from "react";
import CarsCol from "./CarsCol";

export const CarList = ({cars, searchCar}) => {
  const cols = []
  cars.forEach((car)=>{
    if(car.title.toLowerCase().indexOf(searchCar.toLowerCase())=== -1){
      return;
    }
    cols.push(<CarsCol key={car.id} car={car}/>)
  })
  
  return (
    <div className="grid grid-cols-3 gap-5 py-5">
     {
      cols
     }
    </div>
  );
};
