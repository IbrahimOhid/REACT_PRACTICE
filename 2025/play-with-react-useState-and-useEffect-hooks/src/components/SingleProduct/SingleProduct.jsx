import React from 'react'

const SingleProduct = ({singleProduct}) => {
    const {name, price} = singleProduct;
  return (
    <div className='border-2 border-teal-700 mb-2 rounded-xl'>
        <h3>{name}</h3>
        <h6>{price}</h6>
    </div>
  )
}

export default SingleProduct