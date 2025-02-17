import { useState } from "react"
import { useEffect } from "react"
import Product from "../Product/Product";


const Products = ({addToCart}) => {

    const [product, setProduct] = useState([]);
    
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    })
  return (
    <div className="w-3/4 grid grid-cols-3 gap-3 ">
        {
            product.map(product => <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            ></Product>)
        }
    </div>
  )
}

export default Products