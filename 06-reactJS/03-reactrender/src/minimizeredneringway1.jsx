import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <ChangeButton />
      <Header title={"Hi there"} />
      <Header title={"Hi there2"}></Header>
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

function ChangeButton() {
  const [title, setTitle] = useState("Hi there");
  function updateTitle() {
    setTitle(Math.random().toString());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title={title} />
    </div>
  );
}
export default App;
