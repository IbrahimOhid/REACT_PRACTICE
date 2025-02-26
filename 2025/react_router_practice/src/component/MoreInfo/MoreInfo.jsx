import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MoreInfo = () => {
    const moreInfo = useLoaderData();
    const {category, price, image} = moreInfo;
  return (
    <div className='border-2 border-teal-600 rounded-lg py-3 px-5 w-1/4 text-center inline-block '>
        <img className='w-28 inline-block ' src={image} alt="" />
        <h1 className='my-2'>Category: {category} </h1>
        <h3>Price: {price} </h3>
    </div>
  )
}

export default MoreInfo