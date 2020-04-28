import React, { Component } from "react";
import Todos from "./components/Todos";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, content: "Buy some milk" },
        { id: 2, content: "Play mariokart" },
      ],
    };
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}></Todos>
      </div>
    );
  }
}

export default App;
