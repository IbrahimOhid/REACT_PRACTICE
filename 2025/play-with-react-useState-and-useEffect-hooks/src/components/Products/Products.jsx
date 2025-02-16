import { useState } from "react"
import { useEffect } from "react"
import Product from "../Product/Product"

const Products = ({addToCart}) => {

    const [products, setProducts] = useState([])
    

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
  return (
    <div className="grid grid-cols-3 gap-2 w-3/4">
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