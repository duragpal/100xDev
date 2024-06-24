import React, { useState } from "react";
import "./App.css";

// Minimize Rendering using Memo
function App() {
  const [title, setTitle] = useState("Hi there");
  function updateTitle() {
    setTitle(Math.random().toString());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title={title} />
      <Header title={"Hi there"} />
      <Header title={"Hi there"} />
      <Header title={"Hi there"} />
      <Header title={"Hi there"} />
      <Header title={"Hi there"} />
    </div>
  );
}

const Header = React.memo(function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
});
export default App;
