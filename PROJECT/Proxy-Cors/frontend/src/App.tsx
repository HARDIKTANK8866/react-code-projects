import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

type Joke = {
  id: number;
  title: string;
  content: string;
};
const App: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Smiling $ Laughing</h1>
      <p>JOKES : {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
};

export default App;
