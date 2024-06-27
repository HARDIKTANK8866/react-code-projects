import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl">
        <span className="bg-red-500 text-white px-2">Currency</span>
        <span className="bg-blue-500 text-white px-2">Converter</span>
      </h1>
    </>
  );
}

export default App;
