import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product, setShow, setSelected }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      onClick={() => {
        setSelected(product);
        setShow(true);
      }}
      className="bg-gray-800 p-4 rounded cursor-pointer"
    >
      <img src={product.images?.[0]} className="h-32 mx-auto" />
      <h3>{product.title}</h3>
      <p className="text-green-400">${product.price}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="mt-2 w-full bg-green-400 text-black py-1"
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;