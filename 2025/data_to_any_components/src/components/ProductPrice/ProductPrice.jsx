import  { useEffect, useState } from 'react'

const ProductPrice = () => {

    const [price, setPrice] = useState(0);

    const increaseBtn = ()=>{
        const newPrice = price + 1;
        setPrice(newPrice)
    }

    useEffect(()=>{
        alert('Increase Product Price')
    },[price])

  return (
    <div>
        <h1>Product Price: {price} </h1>
        <button onClick={increaseBtn}>Click</button>
    </div>
  )
}

export default ProductPrice