import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div>
      <h1>Hello i m wrapper</h1>
      {children}
    </div>
  );
};

export default Wrapper;