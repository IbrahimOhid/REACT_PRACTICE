function SingleCart({singleCart}) {
    const {name, price} = singleCart;
    return (
        <div className="border-4 border-red-600 py-5 px-5 rounded-lg text-center bg-blue-500 text-white mb-3">
            <h1>Name: {name}</h1>
            <h2>Price: {price}</h2>
        </div>
    )
}
export default SingleCart