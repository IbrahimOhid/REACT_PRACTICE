import React from 'react'
import BookDetails from './BookDetails'
import FeaturesBook from './FeaturesBook'

const BookRow = ({book}) => {
  const {name, author} = book;
  return (
    <div className='flex justify-between items-center bg-white mb-2 px-3 my-3 py-3  shadow rounded-md'>
        <BookDetails  name={name} author={author} />
        <FeaturesBook />
    </div>
  )
}

export default BookRow