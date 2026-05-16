import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import Home from "./components/Home";
import axios from "axios";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  // let getData = async () => {
  //   try {
  //     let res = await axios.get("https://dummyjson.com/products");
  //     console.log(res.data.products);
  //     setProducts(res.data.products);
  //   } catch (error) {
  //     console.log("error in api", error);
  //   }
  // };

  let getData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log("error ");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setToggle((prev) => !prev)}>Change</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inc
      </button>

      {toggle ? <Product /> : <Home />}

      {products.map((elem) => (
        <h1>{elem.title}</h1>
      ))}
    </div>
  );
};

export default App;