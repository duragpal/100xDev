import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //[return two values and these are assigned to count and set count]

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

//component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return (
    <>
      <button onClick={onClickHandler}>Counter {props.count}</button>
    </>
  );
}

export default App;
