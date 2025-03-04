import React from 'react'

const BookDetails = ({name, author}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h3>{author}</h3>
    </div>
  )
}

export default BookDetails