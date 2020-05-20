import React from "react";

const BookDetails = (props) => {
  const { book, removeBook } = props;
  return (
    <li onClick={() => removeBook(book.id)} className="container">
      {book.title}
    </li>
  );
};

export default BookDetails;
