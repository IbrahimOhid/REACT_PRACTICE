import { Link } from "react-router-dom";


function SingleProduct({product}) {
    const {title, price} = product;
  return (
    <div className="border-2 border-green-500 bg-blue-500 rounded-lg text-white py-5 text-center mt-5">
        <h1>Title: {title}</h1>
        <h1>Product Price: {price}</h1>
        <Link to={`/product/${product.id}`} ><button className="bg-red-500 px-5 py-1 mt-3 rounded-md">More info...</button></Link>
    </div>
  )
}

export default SingleProduct