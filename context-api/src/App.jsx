import React, { useContext } from "react";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import { MyStore } from "./context/MyContext";

const App = () => {
  let data = useContext(MyStore);
  console.log(data);

  return (
    <div>
      <h1>App - {data}</h1>
      <About />
    </div>
  );
};

export default App;