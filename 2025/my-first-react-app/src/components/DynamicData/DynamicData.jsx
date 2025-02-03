const styleData = {
    border: '2px solid red',
    padding: '10px',
    margin: '23px'
}

const DynamicData = (props) => {
    
  return (
    <div style={styleData}>
        <h2>Explore Dynamic Data</h2>
        <h3>Name: {props.name}</h3>
        <h4>Age: {props.age}</h4>
    </div>
  )
}

export default DynamicData