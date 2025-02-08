

const Products = (props) => {
  
  return (
    <div>
        <h2>Name: {props.user.name}</h2>
        <h5>Designation: {props.user.designation}</h5>
        <p>Experience: {props.user.experience} </p>
        <button onClick={props.alert}>Click Me</button>
    </div>
  )
}

export default Products