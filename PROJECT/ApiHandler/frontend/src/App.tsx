import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();       //this code is race condition and should be avoided
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search,{
          signal: controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log("Request canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);  
      }
    })();

    //clean up 
    return()=>{
      controller.abort();
    }

  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Api Handler</h1>
      <input type="text" placeholder="search"
        value={search}
        onChange={e => setSearch(e.target.value)} 
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <h2>Number of products are : {products.length}</h2>
    </>
  );
};

export default App;