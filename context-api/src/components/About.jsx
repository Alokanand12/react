import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const About = () => {
  let data = useContext(MyStore);

  return (
    <div>
      <h1>About hu me - {data}</h1>
    </div>
  );
};

export default About;