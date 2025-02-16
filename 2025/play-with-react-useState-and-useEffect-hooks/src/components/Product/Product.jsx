

const Product = ({product, addToCart}) => {
    const {name, price, keyword} = product;
  return (
    <div className="border-2 border-red-600 my-2 rounded-lg bg-teal-500 text-yellow-100 py-2 ">
        <h2>Name: {name}</h2>
        <h4>Price: {price}</h4>
        <h6>Keyword: {keyword}</h6>
        <button onClick={()=> addToCart(product)} className="bg-yellow-500 text-gray-900 px-3 rounded-md py-2 my-2 font-medium hover:bg-pink-700">Add To Cart</button>
    </div>
  )
}

export default Product