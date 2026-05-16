import React, { useEffect, useState } from "react";
import { axiosInstance } from "../components/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const About = () => {
  let getProducts = async () => {
    try {
      console.log("api function running..");
      let res = await axiosInstance.get("/products");
      return res.data.products;
    } catch (error) {
      console.log("error in products api", error);
    }
  };

  let { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: Infinity,
  });

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>This is about page</h1>

      {data.map((elem) => (
        <h2 key={elem.id}>{elem.title}</h2>
      ))}
    </div>
  );
};

export default About;
