import React from 'react'

const SingleFakeData = ({singleData}) => {
    const {name, age, phone, email} = singleData;
  return (
    <div className='border-2 border-red-700 mb-2 rounded-lg'>
        <h1>Name: {name} </h1>
        <h3>Age: {age} </h3>
        <h5>Phone: {phone} </h5>
        <h6>email: {email} </h6>
    </div>
  )
}

export default SingleFakeData