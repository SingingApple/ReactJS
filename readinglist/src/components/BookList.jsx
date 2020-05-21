import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import "./booklist.css";
import BookDetails from "./BookDetails";
const BookList = () => {
  const style = {
    borderRadius: "10px",
    listStyleType: "circle",
  };
  const { books, dispatch } = useContext(BookContext);
  return books.length ? (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="card">
            <div className="card-content">
              <span className="center card-title">
                <h3>Library</h3>
              </span>

              <ul style={style} className="teal darken-3 white-text">
                {books.map((book) => {
                  return <BookDetails key={book.id} book={book}></BookDetails>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>You've no books</p>
  );
};
export default BookList;
