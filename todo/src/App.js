import React, { Component } from "react";
import Todos from "./components/Todos";
import AddForm from "./components/AddForm";
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
  addTodo = (todo) => {
    todo.id = Math.random();
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}></Todos>
        <AddForm addTodo={this.addTodo}></AddForm>
      </div>
    );
  }
}

export default App;
