import { useContext } from 'react'
import Mainbar from './MainBar'
import { SecondContext } from '../App'

function Navbar() {
  const [count1, setCount1] = useContext(SecondContext)
  return (
    <div>
    <Mainbar></Mainbar>
    <button onClick={()=> setCount1(count1 + 1)} className="bg-red-500 text-white rounded-md px-3 py-2 mt-5">Navbar Count : {count1}</button>
    </div>
  )
}

export default Navbar