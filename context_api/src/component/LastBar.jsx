import { useContext } from "react"
import { NameContext } from "./Context/Context1"


function LastBar() {
  const ReceivedContext = useContext(NameContext)
  return (
    <div>
    <button className="bg-red-500 text-white rounded-md px-3 py-2 ">Name Four - {ReceivedContext} </button>
    </div>
  )
}

export default LastBar