import { useContext } from "react"
import LastBar from "./LastBar"
import { SimpleContext } from "../App"

function mainbar() {
    const ReciveContext = useContext(SimpleContext)
  return (
    <div>
    <LastBar></LastBar>
    <button className="bg-red-500 text-white rounded-md px-3 py-2 mt-5">Mainbar Count : {ReciveContext} </button>
    </div>
  )
}

export default mainbar