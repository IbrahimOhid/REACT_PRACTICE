
import { useEffect, useState } from 'react'
import './App.css'
import User_data from './components/User_data/User_data';

function App() {

  const [allData, setAllData] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
  },[])
 
  return (
    <div>
      <h1>Total Data: {allData.length}</h1>
      {
        allData.map(singleData => <User_data key={singleData.id} singleData = {singleData} ></User_data>)
      }
    </div>
  )
}

export default App
