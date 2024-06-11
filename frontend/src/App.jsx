import "./App.css";

import CreateTodo from "./components/CreateTodo";
import AllTodos from "./components/AllTodos";

function App() {
  const todos = [
    {
      _id: "1",
      title: "title",
      description: "description",
      completed: false,
    },
    {
      _id: "2",
      title: "title",
      description: "description",
      completed: false,
    },
    {
      _id: "3",
      title: "title",
      description: "description",
      completed: false,
    },
    {
      _id: "4",
      title: "title",
      description: "description",
      completed: false,
    },
  ];

  return (
    <div>
      <CreateTodo />
      <div className="alltodos">
        <AllTodos todos={todos} />
      </div>
    </div>
  );
}

export default App;
