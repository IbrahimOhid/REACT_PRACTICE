import React from 'react'

const UserData = ({singleData}) => {
    const {name, username, email} = singleData;
  return (
    <div className='mb-2 border-2 border-blue-950 rounded-md'>
        <h1>Name: {name} </h1>
        <h3>UserName: {username} </h3>
        <p>Email: {email} </p>
        <p>Address: {singleData.address.street}</p>
    </div>
  )
}

export default UserData