import React, { useEffect } from 'react';
import { useNav } from '../../context/NavContext.js';

import { CartEmpty } from '../../components/cart-empty.js'; 
import { CartItemsList } from '../../components/cart-items-list.js'; 

// CSS
import '../../style-global.css';
import '../../style-cart.css';
import '../../style-summary.css';

// FAVICON
import faviconCartPage from '../../img/favicon-cart.png';

// --------------------------
export const Cart = () => {
  
  useEffect(() => {
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Set Title
    document.title = "Mario Pizza | Cart";

    // Set Favicon
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = faviconCartPage;
    }
  }, []);

  const { cartItems } = useNav();

  return (
    <div id="cart-page">
      <div className="cart-container">
        
        {/* CONDITIONAL RENDER LOGIC */}
        {cartItems.length === 0 ? (
          <CartEmpty />
        ) : (
          <CartItemsList items={cartItems} />
        )}

      </div>
    </div>
  );
};