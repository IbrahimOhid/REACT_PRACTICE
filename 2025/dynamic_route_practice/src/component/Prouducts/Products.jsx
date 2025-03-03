import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
  const product = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-5">
      {
        product.map(singleProduct => <SingleProduct key={singleProduct.id} singleProduct={singleProduct}></SingleProduct>)
      }
    </div>
  )
}

export default Products