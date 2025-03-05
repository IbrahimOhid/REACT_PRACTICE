import React from 'react'

const BookDetails = ({name, author}) => {
  return (
    <div>
        <h1 className='mb-0.5 font-medium'>{name}</h1>
        <h3 className='font-thin'>{author}</h3>
    </div>
  )
}

export default BookDetails