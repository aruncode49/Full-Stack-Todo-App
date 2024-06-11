import "./App.css";

import CreateTodo from "./components/CreateTodo";
import AllTodos from "./components/AllTodos";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const res = await fetch("http://localhost:8000/todos");
    const data = await res.json();
    if (data.success) {
      setTodos(data.todos);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <CreateTodo getTodos={getTodos} />
      <div className="alltodos">
        <AllTodos todos={todos} getTodos={getTodos} />
      </div>
    </div>
  );
}

export default App;
