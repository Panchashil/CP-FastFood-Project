// AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <AppContext.Provider value={{ selectedMenuId, setSelectedMenuId, cartItems, addToCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};
