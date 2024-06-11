import React from "react";
import "../App.css";

const inputStyle = {
  padding: "8px 12px",
  fontSize: "1rem",
  display: "block",
  margin: "16px",
  marginInline: "auto",
};

const addTodoButtonStyle = {
  padding: "8px 12px",
  fontSize: "1rem",
  display: "block",
  margin: "8px",
  backgroundColor: "lightyellow",
  cursor: "pointer",
  marginInline: "auto",
  marginTop: "15px",
};

const CreateTodo = () => {
  return (
    <div>
      <input
        className="mtop"
        style={inputStyle}
        type="text"
        placeholder="Title"
      />
      <input style={inputStyle} type="text" placeholder="Description" />
      <button style={addTodoButtonStyle}>Add Todo</button>
    </div>
  );
};

export default CreateTodo;
