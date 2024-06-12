import { useState } from "react";
import Navbar from "./component/Navbar";
import { createContext } from "react";

export const FirstContext = createContext();
export const SecondContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(5);
  return (
   <SecondContext.Provider value={[count1, setCount1]}>
   <FirstContext.Provider value={[count, setCount]}>
   <div className="m-80">
   <Navbar></Navbar>
   <button onClick={()=> setCount(count + 1)} className="bg-red-500 mt-5 text-white rounded-md px-3 py-2" >Count Number : {count} </button>
   </div>
   </FirstContext.Provider>
   </SecondContext.Provider>
  )
}

export default App
