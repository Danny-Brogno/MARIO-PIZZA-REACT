import React, { useEffect } from 'react';

// SPLITTING is the text scrolling effect
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting.js';
import Splitting from 'splitting';
import pizzaLogo from '../img/pizza-logo.png';

// --------------------------
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
            Experience authentic Italian craftsmanship. 
            Order online, takeaway, or dine in to enjoy passion in every bite. 
            Our masters bake fresh, high-quality pizzas using traditional techniques. 
            Follow our love for perfect crust and texture; make your next dinner a pizza one!
          </p>
          
          <button className="my-button-special">
            Order now!
          </button>
        </div>
      </div>
    </section>
  );
};