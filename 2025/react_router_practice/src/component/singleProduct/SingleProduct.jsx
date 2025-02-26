import React from 'react'
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {category, price, description, id} = product;
  return (
    <div className='border-2 border-teal-600 rounded-lg py-3 px-5'>
        <h1>Category: {category} </h1>
        <h3>Price: {price} </h3>
        <p>Description: {description} </p>
        <Link to={`/product/${id}`}>
        <button className='bg-green-500 py-1 px-3 my-5 text-white font-semibold rounded-lg'>More Info</button>
        </Link>
    </div>
  )
}

export default SingleProduct