import React from "react";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
const BookDetails = (props) => {
  const { dispatch } = useContext(BookContext);
  const { book } = props;
  return (
    <li
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
      className="container"
    >
      {book.title}
    </li>
  );
};

export default BookDetails;
