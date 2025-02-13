
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleFakeData from './components/SingleFakeData/SingleFakeData'

function App() {

  const [fakeData, setFakeData] = useState([])

  useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setFakeData(data))
  },[])

  return (
    <div className='grid grid-cols-3 gap-2'>
      {
        fakeData.map( singleData => <SingleFakeData key={singleData.id} singleData={singleData}></SingleFakeData>)
      }
    </div>
  )
}

export default App
