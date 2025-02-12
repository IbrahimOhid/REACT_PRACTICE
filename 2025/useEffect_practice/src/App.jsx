import { useEffect, useState } from 'react'
import './App.css'
import UserData from './components/UserData/UserData'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  return (
    <div className='grid grid-cols-4 gap-3'>
      {
        data.map(singleData => <UserData key={singleData.id} singleData={singleData}></UserData>)
      }
    </div>
  )
}

export default App
