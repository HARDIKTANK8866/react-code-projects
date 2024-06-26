import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./ Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Richa",
    age: 21
  }
  let newArr = [1,2,3,4,5]
  return (
    <>
      <h1 className="bg-green-500 text-black p-5 rounded-xl textalign-center">
        Tailwind Test
      </h1>
   <Card userName="HARDIK" btnText="View Profile" />
   <Card userName="Richa" btnText="Click me"/>

    </>
  );
}

export default App;
