import { useContext } from 'react'
import Mainbar from './MainBar'
import { NameContext } from './Context/Context1'

function Navbar() {
  const TouchContext = useContext(NameContext)
  return (
    <div>
    <Mainbar></Mainbar>
    <button  className="bg-red-500 text-white rounded-md px-3 py-2 mt-5">Name Two - {TouchContext} </button>
    </div>
  )
}

export default Navbar