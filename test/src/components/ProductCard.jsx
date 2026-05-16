import React, { useState } from "react";

const ProductCard = ({ product, handleDelete, handleQuantityChange }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    borderRadius: "12px",
    padding: "18px",
    color: "#333",
    background: "#A5C89E", // simple white card
    border: "1px solid #ddd",
    boxShadow: hover
      ? "0 12px 25px rgba(0,0,0,0.15)"
      : "0 6px 12px rgba(0,0,0,0.08)",
    transform: hover ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
  };

  const btnStyle = {
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    background: "#eee",
    color: "#333",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "contain",
          marginBottom: "12px",
        }}
      />

      <h3 style={{ fontSize: "16px", marginBottom: "6px" }}>
        {product.title}
      </h3>

      <p style={{ fontSize: "14px", opacity: 0.8 }}>
        Quantity: <b>{product.quantity || 0}</b>
      </p>

      <p style={{ fontSize: "18px", margin: "6px 0 12px" }}>
        ${product.price.toFixed(2)}
      </p>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          style={{ ...btnStyle, background: "#ff4d4d", backgroundColor:"red", borderRadius:"15px", color: "#fff" }}
          onClick={() => handleDelete(product.id)}
        >
          Delete
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "6px",
            overflow: "hidden",
            background: "#ddd",
          }}
        >
          <button
            style={btnStyle}
            onClick={() =>
              handleQuantityChange(
                product.id,
                (product.quantity || 0) - 1
              )
            }
          >
            −
          </button>

          <div style={{ padding: "0 12px" }}>{product.quantity || 0}</div>

          <button
            style={btnStyle}
            onClick={() =>
              handleQuantityChange(
                product.id,
                (product.quantity || 0) + 1
              )
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;