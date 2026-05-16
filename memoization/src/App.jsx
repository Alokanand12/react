import React, { useCallback, useMemo, useState } from "react";
import About from "./components/About";

const App = () => {
  console.log("App rendering...");
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  let greet = () => {
    setCount(count + 1);
  };

  let calc = useMemo(() => {
    console.log("heavy calculation running...");
    let sum = 0;
    for (let i = 0; i <= 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, [toggle]);

  return (
    <div>
      <h1>App - {count}</h1>
      <h1>toggle - {toggle ? 1 : 0}</h1>
      <button onClick={greet}>Increment</button>
      <button onClick={() => setToggle((prev) => !prev)}>change</button>
      <About />
    </div>
  );
};

export default App;
