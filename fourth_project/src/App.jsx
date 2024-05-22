import { useState } from "react";
import Placement from "./components/Placement/Placement"
import Products from "./components/Products/Products"


function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (placement)=>{
    const NewCart = [...cart, placement];
    setCart(NewCart);
  }

  return (
    <div className="flex gap-11 px-5 py-5">
      <Products addToCart = {addToCart} />
      <Placement cart = {cart} />
    </div>
  )
}

export default App
