import React from 'react'
import Header from './Header'
import Search from './Search'
import BookList from './BookList'

const Boimela = () => {
  return (
    <div className='mx-auto container p-32'>
        <Header />
        <Search />
        <BookList />
    </div>
  )
}

export default Boimela