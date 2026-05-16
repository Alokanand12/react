import React from "react";

function NameList(props) {
  return (
    <div>
      {props.data.map((item, index) => (
        <button
          key={index}
          style={{
            margin: "5px",
            padding: "8px 12px",
            backgroundColor: "orange",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default NameList;