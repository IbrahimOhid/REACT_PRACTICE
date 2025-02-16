
import { useState } from 'react'
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'

function App() {
  const [placement, setPlacement] = useState([])
  
  const addToCart = (product)=>{
    const newProduct = [...placement, product];
    setPlacement(newProduct)
  }
 
  return (
    <div className='flex gap-x-6'>
     <Products addToCart={addToCart}></Products>
     <Placement placement={placement}></Placement>
    </div>
  )
}

export default App
