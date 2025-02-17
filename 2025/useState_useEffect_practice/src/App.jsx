
import { useState } from 'react'
import './App.css'
import AddedCart from './components/AddedCart/AddedCart'
import Products from './components/Products/Products'

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (placement)=>{
    const newCart = [...cart, placement];
    setCart(newCart)
  }
 

  return (
    <div className='flex gap-3'>
      <Products addToCart={addToCart}></Products>
      <AddedCart cart={cart}></AddedCart>
    </div>
  )
}

export default App
