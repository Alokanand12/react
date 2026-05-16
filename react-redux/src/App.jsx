import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  let { count } = useSelector((store) => store.counter);

  return (
    <div>
      <h1>React redux</h1>
      <h1>Count is {count}</h1>
    </div>
  );
};

export default App;