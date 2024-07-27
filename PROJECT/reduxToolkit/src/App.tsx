import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-semibold border-b-4 border-blue-500 font-sans">Hello Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
