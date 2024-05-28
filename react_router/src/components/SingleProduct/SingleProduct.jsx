

function SingleProduct({product}) {
    const {name, price} = product;
  return (
    <div className="border-2 border-green-500 bg-teal-500 rounded-lg text-white py-5 text-center">
        <h1>Product Name: {name}</h1>
        <h1>Product Price: {price}</h1>
    </div>
  )
}

export default SingleProduct