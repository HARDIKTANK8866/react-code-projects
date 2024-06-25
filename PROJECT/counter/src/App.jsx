import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter < 50) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={incrementCounter}>Add Value</button>
      <br />
      <button onClick={decrementCounter}>Remove Value</button>
    </>
  );
}

export default App;
