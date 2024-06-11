import React, { useState } from "react";
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

const CreateTodo = ({ getTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleAddTodo() {
    const res = await fetch("http://localhost:8000/create", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.success) {
      setTitle("");
      setDescription("");
      getTodos();
    }
  }

  return (
    <div>
      <input
        className="mtop"
        style={inputStyle}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
        type="text"
        placeholder="Description"
      />
      <button onClick={handleAddTodo} style={addTodoButtonStyle}>
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
