
import './App.css'
import Products from './components/Products/Products'

function App() {
 
  const productList = {
    name: 'HP Laptop',
    price: 30000
  }

  return (
    <>
      <Products products = {productList}></Products>
    </>
  )
}

export default App
