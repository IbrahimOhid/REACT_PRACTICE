import React from "react";
import BookRow from "./BookRow";

const BookList = ({searchTerm, books}) => {


  return (
    <div>
      {
        books.map((book) => <BookRow 
        key={book.id}
        book={book}
        ></BookRow>)
      }
    </div>
  );
};

export default BookList;
