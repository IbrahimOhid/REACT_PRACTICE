import { useContext } from "react"
import LastBar from "./LastBar"
import { SecondContext } from "../App"


function mainbar() {
    const [count1, setCount1] = useContext(SecondContext);
  return (
    <div>
    <LastBar></LastBar>
    <button onClick={()=> setCount1(count1 + 1)} className="bg-red-500 text-white rounded-md px-3 py-2 mt-5">MainBar Count: {count1} </button>
    </div>
  )
}

export default mainbar