import { useState } from "react"



const Products = () => {

  const [price, setPrice] = useState(0);

  const increaseBtn = () =>{
    const newPrice = price + 1;
    setPrice(newPrice);
  }

  const decreaseBtn = ()=>{
    const newPrice = price - 1;
    setPrice(newPrice)
  }
  
  return (
    <div>
        <h1>Price: {price} </h1>
        <button onClick={increaseBtn}>Increase</button>
        <button onClick={decreaseBtn}>Decrease</button>

        <h3>Price: {price}</h3>
        <p>Price: {price}</p>
    </div>
  )
}

export default Products