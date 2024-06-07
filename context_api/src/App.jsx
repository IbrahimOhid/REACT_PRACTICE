import { createContext, useState } from "react"
import Navbar from "./component/Navbar";

export const SimpleContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
   <div className="m-80">
   <SimpleContext.Provider value={count}>
   <Navbar></Navbar>
   <button className="bg-red-500 mt-5 text-white rounded-md px-3 py-2" onClick={()=> setCount(count + 1)}>Count Number : {count} </button>
   </SimpleContext.Provider>
   </div>
  )
}

export default App
