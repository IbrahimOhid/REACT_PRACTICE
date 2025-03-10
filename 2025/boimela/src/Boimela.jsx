import React, { useState } from 'react'
import Header from './Header'
import Search from './Search'
import BookList from './BookList'

const Boimela = () => {
  const Books = [
    {
      id: 1,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      features: false,
    },
    {
      id: 2,
      name: "1984",
      author: "George Orwell",
      features: false,
    },
    {
      id: 3,
      name: "Pride and Prejudice",
      author: "Jane Austen",
      features: false,
    },
    {
      id: 4,
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      features: false,
    },
    {
      id: 5,
      name: "Moby-Dick",
      author: "Herman Melville",
      features: false,
    },
    {
      id: 6,
      name: "War and Peace",
      author: "Leo Tolstoy",
      features: false,
    },
    {
      id: 7,
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      features: false,
    },
    {
      id: 8,
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      features: false,
    },
    {
      id: 9,
      name: "Brave New World",
      author: "Aldous Huxley",
      features: false,
    },
    {
      id: 10,
      name: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      features: false,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("")
  
  
  return (
    <div className='mx-auto container p-32'>
        <Header />
        <Search setSearchTerm={searchTerm} onSearchTerm={setSearchTerm} />
        <BookList setSearchTerm={searchTerm} books={Books} />
    </div>
  )
}

export default Boimela