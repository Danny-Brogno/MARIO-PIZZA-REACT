import React from 'react';
import { useNav } from '../../context/NavContext.js';

import { CartEmpty } from '../../components/cart-empty.js'; 
import { CartItemsList } from '../../components/cart-items-list.js'; 

// CSS
import '../../style-global.css';
import '../../style-cart.css';

export const Cart = () => {
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