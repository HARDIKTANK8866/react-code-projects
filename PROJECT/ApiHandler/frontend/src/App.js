// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

function App() {

    const [products, error, loading] = customReactQuery('api/products') 

        if (error) {
          return <h1>Something went wrong</h1>;
        }

        if (loading) {
          return <h1>Loading...</h1>;
        }

        return (
            <>
                <h1>Products</h1>
                <h2>
                    number of products: {products.length}
                </h2>
            </>
        )

    }

export default App

const customReactQuery = (urlpath)=>{           //this  hook from all custom react query use
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await axios.get(urlpath);
                console.log(response.data);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }   
        })();
    }, []);

    return [products, error, loading]
}    
