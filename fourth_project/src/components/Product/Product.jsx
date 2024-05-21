
function Product({item}) {
    const {name, price} = item;
    return (
        <div className="border border-red-500 py-5 px-5 rounded-lg text-center">
            <h1>Name: {name}</h1>
            <h3>Price: {price}</h3>
            <button className="bg-amber-600 px-5 py-1 text-white mt-3 fw-bold rounded-lg">Add To Cart</button>
        </div>
    )
}
export default Product