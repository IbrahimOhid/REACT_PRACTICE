
import { useState } from 'react'
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'

function App() {
  const [addProduct, setAddProduct] = useState([])
  const addToCart = (product)=>{
    const addedProduct = [...addProduct, product];
    setAddProduct(addedProduct)
  }

  return (
    <div className='flex'>
     <Products addToCart={addToCart}></Products>
     <Placement addProduct={addProduct} ></Placement>
    </div>
  )
}

export default App
