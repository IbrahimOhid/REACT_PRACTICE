

const Products = (props) => {
  return (
    <div>
        <h3>Product Name: {props.products.name}</h3>
        <p>Price: {props.products.price}</p>
    </div>
  )
}

export default Products