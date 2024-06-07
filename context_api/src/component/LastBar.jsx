import { useContext } from "react"
import { SimpleContext } from "../App"


function LastBar() {
    const ReciveContext = useContext(SimpleContext);
  return (
    <div>
    <button className="bg-red-500 text-white rounded-md px-3 py-2 ">Lastbar Count : {ReciveContext}</button>
    </div>
  )
}

export default LastBar