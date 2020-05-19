import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
const BookList = () => {
  const style = {
    borderRadius: "10px",
    listStyleType: "circle",
  };
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="card">
            <div className="card-content">
              <span className="center card-title">
                <h3>Library</h3>
              </span>
              <p style={style} className="teal darken-3 white-text">
                <ul>
                  {books.map((book) => {
                    return (
                      <li style={style} className="container">
                        {book.title}
                      </li>
                    );
                  })}
                </ul>
              </p>
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
