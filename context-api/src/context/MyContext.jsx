import { createContext } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  let greet = "good evening";

  return <MyStore.Provider value={greet}>{children}</MyStore.Provider>;
};