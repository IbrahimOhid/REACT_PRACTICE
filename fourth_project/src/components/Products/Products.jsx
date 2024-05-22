import { useState } from "react"
import { useEffect } from "react"
import Product from "../Product/Product";

function Products({addToCart}) {
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                item.map(item => <Product key={item.id} addToCart = {addToCart} item={item}></Product>)
            }
        </div>
    )
}
export default Products