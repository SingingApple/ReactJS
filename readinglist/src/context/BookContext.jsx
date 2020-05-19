import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBook] = useState([
    { title: "name of the wild", author: "partrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 },
  ]);
  const addBook = (title, author) => {
    setBook([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBook(
      books.filter((book) => {
        return !(book.id === id);
      })
    );
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
