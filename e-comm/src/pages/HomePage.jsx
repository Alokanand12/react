import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../context/productContext";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  let { setProducts, products, cartItems } = useContext(Product);

  let fetchProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res);
      setProducts(res.data);
    } catch (error) {
      console.log("error in product apis", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">All products</h1>
      <div className="grid grid-cols-4">
        {products.map((elem) => {
          let isInCart = cartItems.find(val => val.id === elem.id)
          return <ProductCard key={elem.id} product={elem} quantity={isInCart?.quantity} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
