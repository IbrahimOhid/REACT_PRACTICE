import React from "react";
import BookRow from "./BookRow";

const BookList = ({ searchTerm, books }) => {
  const rows = [];
  books.forEach((book) => {
    if (book.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<BookRow key={book.id} book={book} />);
  });

  return <div>{rows}</div>;
};

export default BookList;
