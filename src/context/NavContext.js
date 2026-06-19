import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("homepage");
  // Global cart state holding an array of pizza objects
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems((prevItems) => {
      // Check if pizza already exists in cart to update quantity
      const existingItem = prevItems.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Otherwise, add it as a new item with a base quantity of 1
      return [...prevItems, { ...pizza, quantity: 1 }];
    });
  };

  return (
    <NavContext.Provider value={{ currentPage, setCurrentPage, cartItems, setCartItems, addToCart }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);