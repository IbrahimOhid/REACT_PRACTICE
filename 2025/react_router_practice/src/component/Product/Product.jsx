import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleProduct from '../singleProduct/SingleProduct';

const Product = () => {
  const products = useLoaderData();
  return (
    <div className='grid grid-cols-3 gap-6'>
      {
        products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
      }
    </div>
  )
}

export default Product