import React from "react";
function Todos(props) {
  const todoList = props.todos.length ? (
    props.todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              props.deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You've no todos left</p>
  );
  return <div className="todos collection">{todoList}</div>;
}
export { Todos as default };
