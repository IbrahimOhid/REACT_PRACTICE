import React from 'react'

const SingleProduct = ({product}) => {
    const {category, price, description} = product;
  return (
    <div className='border-2 border-teal-600 rounded-lg py-3 px-5'>
        <h1>Category: {category} </h1>
        <h3>Price: {price} </h3>
        <p>Description: {description} </p>
    </div>
  )
}

export default SingleProduct