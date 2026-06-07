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

export const UnderHeaderOrderOnline = () => {
  const { setCurrentPage } = useNav();
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
    { name: "Four cheeses", price: 8, image: pizza9 }
  ];
  
  // Placeholder function for your toggle
  const togglePizzas = (pizza) => {
    console.log("Selected Pizza:", pizza.name);
    // Add your logic here (e.g., opening a modal or selecting an item)
  };
  
  return (
    <div className="under-header-orderOnline">
      <h1>ORDER ONLINE</h1>
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
            <button tyle="button" className="my-button-special" onClick={(e) => e.stopPropagation()} onClick={() => setCurrentPage("cart")}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}