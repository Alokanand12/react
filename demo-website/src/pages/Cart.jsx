import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div className="mt-20 p-4">
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} ({item.qty})
          <button onClick={()=>removeItem(item.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;