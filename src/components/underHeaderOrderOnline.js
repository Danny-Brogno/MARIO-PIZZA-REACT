import React, { useState } from 'react';
import { useNav } from '../context/NavContext.js';

import pizza1 from '../img/1.jpg';
import pizza2 from '../img/2.jpg';
import pizza3 from '../img/3.jpg';
import pizza4 from '../img/4.jpg';
import pizza5 from '../img/5.jpg';
import pizza6 from '../img/6.jpg';
import pizza7 from '../img/7.jpg';
import pizza8 from '../img/8.jpg';
import pizza9 from '../img/9.jpg';
import pizza10 from '../img/10.jpg';
import pizza11 from '../img/11.jpg';
import pizza12 from '../img/12.jpg';

export const UnderHeaderOrderOnline = () => {
  
  // CONTEXT -> Pulled navigation handlers and list properties
  const { setCurrentPage, cartItems, setCartItems } = useNav();
  
  // State to track which image is enlarged
  const [enlargedImg, setEnlargedImg] = useState(null);

  // Function to open the overlay
  const handleImageClick = (imgSrc) => {
    setEnlargedImg(imgSrc);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setEnlargedImg(null);
  };
  
  const pizzas = [
    { name: "Margherita", price: 5, image: pizza1 },
    { name: "Pepperoni", price: 7, image: pizza2 },
    { name: "Sausage & Turnip greens", price: 8, image: pizza3 },
    { name: "Mozzarella di bufala", price: 9, image: pizza4 },
    { name: "Prosciutto crudo & mozzarella", price: 10, image: pizza5 },
    { name: "Primavera", price: 10, image: pizza6 },
    { name: "Yellow tomatoes & burrata", price: 8, image: pizza7 },
    { name: "Sundried tomatoes & bresaola", price: 9, image: pizza8 },
    { name: "Four cheeses", price: 8, image: pizza9 },
    { name: "Capricciosa", price: 9, image: pizza10 },
    { name: "Cardinale", price: 9, image: pizza11 },
    { name: "Frankfurter and french fries", price: 7, image: pizza12 }
  ];
  
  const togglePizzas = (pizza) => {
    console.log("Selected Pizza:", pizza.name);
  };

  // ADD TO CART WITHOUT REDIRECT LOGIC
  const handleAddToCart = (pizza) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === pizza.name);
      if (existingItem) {
        return prevItems.map(item => 
          item.name === pizza.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { id: `pizza-${Date.now()}-${pizza.name}`, ...pizza, quantity: 1 }];
      }
    });
  };

  // Calculate accumulated items count for our small link badge display
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <div className="under-header-orderOnline" style={{ position: 'relative' }}>
      <h1>ORDER ONLINE</h1>
      <h2>Pizzas</h2>
      {/* SIMPLE CART ICON LINK (TOP RIGHT INLINE NAVIGATION) */}
      <div className="cart-icon"
        onClick={() => setCurrentPage("cart")}
      >
        🛒 Cart ({totalCartCount})
      </div>

      <div className="order-pizza-container">
        
        {/* THE OVERLAY (Only shows when an image is clicked) */}
        {enlargedImg && (
        <div 
          onClick={closeOverlay}
          style={{
            background: `RGBA(0,0,0,.9) url(${enlargedImg}) no-repeat center`,
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: '10000',
            top: '0',
            left: '0',
            cursor: 'pointer'
          }}
        />
        )}
        
        {/* LOOP OVER array of Objs */}
        {pizzas.map((pizza, index) => (
          
          <div 
          className="card" 
          key={index} 
          onClick={() => togglePizzas(pizza)}
          >
          
          {/* We pass the image as an inline style to the ::before pseudo-element replacement */}
          <div className="circle" 
            style={{ "--pizza-img": `url(${pizza.image})`}}
            onClick={() => handleImageClick(pizza.image)}
          >
          </div>

          <div className="content">
            <h2>{pizza.name}</h2>
            <p>Price: £{pizza.price}</p>
            <button 
              type="button" 
              className="my-button-special" 
              onClick={(e) => {
                e.stopPropagation(); 
                handleAddToCart(pizza); // Modified execution block: remains on page
              }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};