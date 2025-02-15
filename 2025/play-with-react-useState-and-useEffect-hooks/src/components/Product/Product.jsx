const Product = ({ product, addToCart }) => {
  const { name, price, img } = product;

  return (
    <div className="border-2 border-orange-700  rounded-xl bg-fuchsia-800 text-white w-3/4">
      <h2>Name: {name}</h2>
      <h5>Price: {price} </h5>
      <button onClick={()=> addToCart(product)} className="bg-yellow-500 px-3 py-1 my-2 rounded-md hover:bg-orange-500">Add To Cart</button>
    </div>
  );
};

export default Product;
