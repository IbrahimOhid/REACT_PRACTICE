
import './App.css'
import Products from './components/Products/Products'

function App() {
 
  const userInfo = [
    {name: 'ibrahim', designation: 'web engineer', experience: 2},
    {name: 'mohammad', designation: 'web developer', experience: 3}, 
    {name: 'Rahim', designation: 'web designer', experience: 4}
  ]

  const buttonAlert = () => {
    alert('Oh no');
  }

  return (
    <>
      {
        userInfo.map(singleUser => <Products user = {singleUser} alert= {buttonAlert}></Products>)
      }
    </>
  )
}

export default App
