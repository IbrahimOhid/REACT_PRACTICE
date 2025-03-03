import React from "react";
import { useLoaderData } from "react-router-dom";

const MoreInfo = () => {
  const singleData = useLoaderData();
  const { title, price, description, image } = singleData;
  return (
    <div className='border-2 border-teal-600 rounded-lg p-5 text-center w-1/4 inline-block '>
      <img className="w-24 inline-block my-3" src={image} alt="" />
      <h1>Title: {title}</h1>
      <h2>Price: {price}</h2>
      <p>Description: {description}</p>
    </div>
  );
};

export default MoreInfo;
