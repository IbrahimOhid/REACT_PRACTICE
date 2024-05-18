import Products from "./Components/Products/Products"


function App() {
  const ProductName = [
    {name:'Dell', model:'Dell 33OP3', price: 20000},
    {name:'HP', model:'HP 55@CE', price: 30000},
    {name:'Asus', model:'Asus 43PP03', price: 40000},
  ]

  const forAlert = () => {
    alert("Alert Don't Click")
  }
 
  return (
    <div>
      {
        ProductName.map(product => <Products product={product} alert={forAlert} ></Products>)
      }
    </div>
  )
}

export default App
