import React, { useContext } from "react";
import { Product } from "../context/productContext";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router";

const CartPage = () => {
  let { cartItems } = useContext(Product);

  return (
    <div>
      {cartItems.map((elem) => {
        return <ProductCard product={elem} />;
      })}
    </div>
  );
};

export default CartPage;
