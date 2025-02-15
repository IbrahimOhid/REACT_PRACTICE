import { useEffect, useState } from 'react'
import Product from '../Product/Product';

const Products = ({addToCart}) => {
    const [products, setProducts] = useState([]);

   useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   })

  return (
    <div className='grid grid-cols-3 gap-5'>
        {
            products.map(product => <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            ></Product>)
        }
    </div>
  )
}

export default Products