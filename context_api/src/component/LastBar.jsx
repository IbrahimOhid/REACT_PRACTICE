import { useContext } from "react"
import { FirstContext } from "../App"


function LastBar() {
  const [count, setCount] = useContext(FirstContext)
  return (
    <div>
    <button onClick={()=> setCount(count + 1)} className="bg-red-500 text-white rounded-md px-3 py-2 ">Lastbar Count : {count} </button>
    </div>
  )
}

export default LastBar