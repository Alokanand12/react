import React from "react";

const ProductCard = ({ product, handleDelete }) => {
  return (
    <div style={{ border: "2px solid black", borderRadius:"60px", padding: "20px", objectFit:"cover",objectPosition:"center",flexWrap:"wrap"}}>
      <img width={200} style={{  borderRadius:"60px", padding: "20px", objectFit:"cover",objectPosition:"center"}}src={product.image}  alt="" />
      <h1>{product.price}</h1>
      <h1>{product.category}</h1>
      <h1>{product.rating.count}</h1>
         <h1>{product.rating.rate}</h1>
      <button style={{borderRadius:"23px", cursor:"pointer", background:"black",color:"white"}}  onClick={() => handleDelete(product.id)}>Delete</button>
    </div>
  );
};

export default ProductCard;