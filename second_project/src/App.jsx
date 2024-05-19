import { useState } from 'react'
import './App.css'

function App() {
  
  const [amount, setAmount] = useState(3);

  const increase = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
  }

  const decrease = () => {
    const newAmount = amount - 1;
    setAmount(newAmount);
  }

 
  return (
    <div className="component">
      <h1>Price: {amount} </h1>
      <button onClick={increase} className='plus-btn' >+</button> 
      <button onClick={decrease} className='minus-btn'>-</button>

      <h2>Price: {amount}</h2>
      <h5>Price: {amount}</h5>
      <p>Price: {amount}</p>
    </div>
  )
}

export default App
