

const SingleCart = ({singleCart}) => {
    const {name, price} = singleCart;
    
  return (
    <div className="border-2 border-red-600 py-8 rounded-lg bg-teal-500 mb-3">
        <h1>Name: {name}</h1>
        <h3>Price: {price}</h3>
    </div>
  )
}

export default SingleCart