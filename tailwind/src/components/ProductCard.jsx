import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="border p-4 rounded-xl">
      <div className="h-35 w-35 overflow-hidden rounded-2xl">
        <img
          className="h-full w-full object-cover rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          src={data.image}
          alt={data.name}
        />
      </div>


      <h1 className="mt-2 font-semibold">{data.name}</h1>
      <h1 className="mt-2 font-semibold text-green-600">{data.price}</h1>
      <button className="bg-red-400 border-amber-50 cursor-pointer text-xl">
        remove
      </button>
      
    </div>
  );
};

export default ProductCard;