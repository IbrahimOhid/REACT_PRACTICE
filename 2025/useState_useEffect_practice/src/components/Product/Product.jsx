

const Product = ({product, addToCart}) => {
    const {name, price} = product;
  return (
    <div className="border-2 border-red-600 py-8 rounded-lg bg-teal-500">
        <h1>Name: {name}</h1>
        <h4>Price: {price}</h4>
        <button onClick={()=>addToCart(product)} className="bg-yellow-500 text-white px-3 py-1 my-4 rounded-lg hover:bg-pink-700">Add To Cart</button>
    </div>
  )
}

export default Product