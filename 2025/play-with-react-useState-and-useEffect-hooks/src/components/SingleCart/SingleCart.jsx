

const SingleCart = ({singlecart}) => {
    const {name, price, keyword} = singlecart;
  return (
    <div className="border-2 border-red-600 my-2 rounded-lg bg-teal-500 text-yellow-100 py-2 ">
        <h2>Name: {name}</h2>
        <h4>Price: {price}</h4>
        <h6>Keyword: {keyword}</h6>
    </div>
  )
}

export default SingleCart