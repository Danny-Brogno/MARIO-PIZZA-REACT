import React from 'react';
import { useNav } from '../context/NavContext.js';

export const CartEmpty = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="cart-empty text-center py-5">
      
      <div className="rainbow-demo">
        <h1 className="rainbow-text fw-bolder mb-3">
          <span style={{ "--d": "0s" }}>Y</span>
          <span style={{ "--d": ".1s" }}>o</span>
          <span style={{ "--d": ".2s" }}>u</span>
          <span style={{ "--d": ".3s" }}>r</span>
          <span style={{ "--d": ".4s" }}>&nbsp;</span>
          <span style={{ "--d": ".5s" }}>C</span>
          <span style={{ "--d": ".6s" }}>a</span>
          <span style={{ "--d": ".7s" }}>r</span>
          <span style={{ "--d": ".8s" }}>t</span>
          <span style={{ "--d": ".9s" }}>&nbsp;</span>
          <span style={{ "--d": ".10s" }}>I</span>
          <span style={{ "--d": ".11s" }}>s</span>
          <span style={{ "--d": ".12s" }}>&nbsp;</span>
          <span style={{ "--d": ".13s" }}>E</span>
          <span style={{ "--d": ".14s" }}>m</span>
          <span style={{ "--d": ".15s" }}>p</span>
          <span style={{ "--d": ".16s" }}>t</span>
          <span style={{ "--d": ".17s" }}>y</span>
        </h1>
      </div>
      
      <button 
        className="btn btn-warning px-4 py-2 fw-bold my-button-special"
        onClick={() => setCurrentPage("orderOnline")}
      >
        Order Online Now
      </button>
    </div>
  );
};