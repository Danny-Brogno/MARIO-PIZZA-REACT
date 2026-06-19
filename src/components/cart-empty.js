import React from 'react';
import { useNav } from '../context/NavContext.js';

export const CartEmpty = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="cart-empty text-center py-5">
      <h1 className="fw-bolder mb-3">YOUR CART IS EMPTY</h1>
      <p className="text-muted mb-4">Craving a slice? Fill it up with Mario's special recipes!</p>
      <button 
        className="btn btn-warning px-4 py-2 fw-bold text-uppercase"
        onClick={() => setCurrentPage("orderOnline")}
      >
        Order Online Now
      </button>
    </div>
  );
};