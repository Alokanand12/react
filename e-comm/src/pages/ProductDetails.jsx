import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Product } from "../context/productContext";
import axios from "axios";

const ProductDetails = () => {
  let { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  console.log(singleProduct);

  let getSingleProduct = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("Error in api", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      <h1>Product details</h1>
      <img src={singleProduct.image} alt="" />
    </div>
  );
};

export default ProductDetails;
