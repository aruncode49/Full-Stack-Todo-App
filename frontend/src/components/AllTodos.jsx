import React from "react";
import "../App.css";

const AllTodos = ({ todos }) => {
  return (
    todos.length &&
    todos.map((todo) => (
      <div key={todo._id} className="todo">
        <p>{todo.title}</p>
        <p>{todo.description}</p>
        <button>{todo.completed ? "Completed" : "Mark as completed"}</button>
      </div>
    ))
  );
};

export default AllTodos;
