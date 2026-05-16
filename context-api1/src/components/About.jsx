import React, { useContext } from "react";
import { Counter } from "../context/CountContext";

const About = () => {
  console.log("about rendering...");

  let { count, setCount } = useContext(Counter);

  return (
    <div>
      <h1>About - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default About;