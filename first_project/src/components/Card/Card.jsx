import './Card.css'

const CardDesign = {
    border: '3px solid black',
    backgroundColor: 'chocolate',
    width: '300px',
    borderRadius: '10px',
    margin: '10px auto',
    textAlign: 'justify',
    padding: '5px 10px',
    color: '#fff'
}

function Card(props) {

    return (
        <div style={CardDesign}>
            <h1>Card Details</h1>
            <h2>Name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <h4>Village: {props.village}</h4>
            <h5>Union: {props.union} </h5>
        </div>
    )
}
export default Card