import React from 'react'
import BookDetails from './BookDetails'
import FeaturesBook from './FeaturesBook'

const BookRow = ({book}) => {
  return (
    <div>
        <BookDetails name={book.name} author={book.author} />
        <FeaturesBook />
    </div>
  )
}

export default BookRow