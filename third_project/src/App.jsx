import { useState } from "react"
import { useEffect } from "react"
import FakeData from "./components/FakeData/FakeData";


function App() {
  const [fakeData, setFakeData] = useState([]);
  
  useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setFakeData(data))
  },[])

  return (
    <div className="grid grid-cols-4">
     {
      fakeData.map(fakeData => <FakeData key={fakeData.id} fakeData={fakeData}></FakeData>)
     }
    </div>
  )
}

export default App
