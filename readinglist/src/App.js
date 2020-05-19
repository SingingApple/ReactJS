import React from "react";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider></BookContextProvider>
    </div>
  );
}

export default App;
