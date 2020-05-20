import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
const BookForm = () => {
  const [title, setTitle] = useState([{ title: "" }]);
  const [author, setAuthor] = useState([{ author: "" }]);
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook(title, author);
    }
    setTitle("");
    setAuthor("");
    document.querySelector("form").reset();
  };
  const { addBook } = useContext(BookContext);
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={changeTitle} />
      </div>
      <div className="input-field">
        <label htmlFor="author">Author</label>
        <input type="text" id="author" onChange={changeAuthor} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default BookForm;
