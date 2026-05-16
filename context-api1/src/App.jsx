import React, { useContext } from "react";
import { ContextProvider, Counter } from "./context/CountContext";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  // console.log("app rendering...");
  // let { count, setCount } = useContext(Counter);

  return (
    <div>
      <h1>App</h1>
      <h1>Count is</h1>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment</button> */}

      <ContextProvider>
        <About />
        <Contact />
      </ContextProvider>
    </div>
  );
};

export default App;