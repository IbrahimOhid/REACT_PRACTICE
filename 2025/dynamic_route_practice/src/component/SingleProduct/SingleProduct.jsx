import React from 'react'
import { Link } from 'react-router-dom';

const SingleProduct = ({singleProduct}) => {
    const {title, price, id} = singleProduct;
  return (
    <div className='border-2 border-teal-600 rounded-lg p-5 text-center bg-orange-500'>
        <h1>Title: {title}</h1>
        <h2>Price: {price}</h2>
        <Link to={`/product/${id}`}>
            <button className='bg-green-500 text-white py-1 px-4 my-3 rounded-lg '>More Info...</button>
        </Link>
    </div>
  )
}

export default SingleProduct