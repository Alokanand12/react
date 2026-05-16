import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./features/counterReducer";

const App = () => {
  let dispatch = useDispatch();
  const [value, setValue] = useState(0);
  let { count } = useSelector((store) => store.counter);

  return (
    <div>
      <h1>React Redux</h1>
      <h1>Count is {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Number"
      />

      <button onClick={() => dispatch(incrementByValue(value))}>
        Add value
      </button>
    </div>
  );
};

export default App;
