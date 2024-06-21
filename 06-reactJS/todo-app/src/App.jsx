import { useState } from "react";

import "./App.css";

/*
State: todo = [{title, description, completed}]

*/
function App() {
  const [todos, setTodos] = useState([
    {
      title: "School Work",
      description: "Maths work,physics work",
      completed: false,
    },
    { title: "Go to Market", description: "Buy Cloths", completed: true },
  ]);

  function AddTodos() {
    setTodos([
      ...todos,
      { title: "charge the laptop", description: "until 100% charged" },
    ]);
  }

  return (
    <div>
      <button onClick={AddTodos}>Add Todos</button>
      {/* {JSON.stringify(todos)} not a good way */}
      {/* <Todo title={todos[0].title} description={todos[0].description} /> */}
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

//Component
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}
export default App;
