import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/userReducer";

const App = () => {
  let dispatch = useDispatch();

  let { user } = useSelector((store) => store.auth);

  return (
    <div>
      <h1>Redux - {user}</h1>
      <button onClick={() => dispatch(setUser("raju"))}>Jaooo</button>
    </div>
  );
};

export default App;
