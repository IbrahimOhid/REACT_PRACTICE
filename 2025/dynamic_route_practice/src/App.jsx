
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import Navigation from './component/Navigation/Navigation'
import Footer from './component/Footer/Footer'

function App() {

  return (
   <div>
    <Navigation />
    <Outlet />
    <Footer />
   </div>
  )
}

export default App
