import React, { createContext, useState } from "react";

export let Counter = createContext();

export let ContextProvider = ({ children }) => {
  console.log("context rendering...");
  const [count, setCount] = useState(0);

  return (
    <Counter.Provider
      value={{
        setCount,
        count,
      }}
    >
      {children}
    </Counter.Provider>
  );
};