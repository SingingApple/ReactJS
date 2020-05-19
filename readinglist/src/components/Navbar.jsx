import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="nav-wrapper ">
      <nav className="navbar grey darken-3">
        <div className="container">
          <a href="#" className="brand-logo">
            Apple List
          </a>
          <ul className="right">
            <li>Library: {books.length}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
