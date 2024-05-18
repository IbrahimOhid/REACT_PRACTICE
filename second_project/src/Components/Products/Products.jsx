import './Products.css'

function Products(props) {
    return (
        <div className='product-div'>
           <h1>Product Name: {props.product.name}</h1>
           <h2>Model Name: {props.product.model} </h2>
           <h3>Product Price: {props.product.price} </h3>
           <button className='btn' onClick={props.alert}>Click Me</button>
        </div>
    )
}
export default Products