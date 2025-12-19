import React, { useEffect } from 'react';

// These lines pull the code directly from the npm package you just installed
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting.js';
import Splitting from 'splitting';
import pizzaLogo from '../img/pizza-logo.png';
export const UnderHeader = () => {
  
  useEffect(() => {
    // We call the function inside useEffect so React ensures 
    // the HTML is ready before the "splitting" happens.
    Splitting();
  }, []);

  return (
    <section className="under-header">
      <div className="under-header-overlay">
        <div className="under-header-content">
          <div className="title-and-logo">
            <h2>MARIO PIZZA</h2>
            <img id="pizza-logo" src={pizzaLogo} alt="pizzaLogo" />
          </div>
          
          {/* data-splitting tells the library which text to target */}
          <p className="under-header-text" data-splitting>
            From a deep love of Italian dough, Mario is now going across the land to give you the tastiest slice! 
            He bakes every product based on its texture, flavor, freshness, and crust. 
            Follow his passion and make sure your next dinner is the pizza one.
          </p>
          
          <button className="order-now-btn">
            Order now!
          </button>
        </div>
      </div>
    </section>
  );
};