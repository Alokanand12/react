import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [count, setCount] = useState(0);
  console.log("home rendering..");

  //   let timer = setInterval(() => {
  //     console.log("hello");
  //   }, 500);

  //   useEffect(() => {
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);
  return (
    <div>
      <h1>Home - {count}</h1>
      <button onClick={() => setCount(count + 1)}>badhaoo</button>
    </div>
  );
};

export default Home;