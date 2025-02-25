import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App


