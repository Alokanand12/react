import { createContext, useState } from "react";

export let Product = createContext();

export let ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  console.log("products in context", products);
  return (
    <Product.Provider
      value={{
        setProducts,
        products,
        setCartItems,
        cartItems,
      }}
    >
      {children}
    </Product.Provider>
  );
};
