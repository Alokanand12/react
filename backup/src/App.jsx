import React from "react";
import NameList from "./NameList";

function App() {
  const names = ["shagufta", "anshul", "shivam", "alok", "ek tha mai"];

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>App hu Mai</h1>

    
      <NameList data={names} />
    </div>
  );
}

export default App;