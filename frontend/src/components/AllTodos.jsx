import React from "react";
import "../App.css";

const AllTodos = ({ todos, getTodos }) => {
  async function handleUpdateTodo(id) {
    const res = await fetch("http://localhost:8000/update", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.success) {
      getTodos();
    }
  }

  return (
    todos.length &&
    todos.map((todo) => (
      <div key={todo._id} className="todo">
        <p>{todo.title}</p>
        <p>{todo.description}</p>
        <button onClick={(e) => handleUpdateTodo(todo._id)}>
          {todo.completed ? "Completed" : "Mark as completed"}
        </button>
      </div>
    ))
  );
};

export default AllTodos;
