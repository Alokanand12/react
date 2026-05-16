import React from "react";

const About = () => {
  console.log("about rendering...");
  return (
    <div>
      <h1>this is about</h1>
    </div>
  );
};

export default React.memo(About);
