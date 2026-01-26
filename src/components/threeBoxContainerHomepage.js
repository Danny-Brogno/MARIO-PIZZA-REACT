import React from 'react';
import pizza1 from '../img/27.jpg';
import pizza2 from '../img/31.jpg';
import pizza3 from '../img/32.jpg';

// --------------------------
export const ThreeBoxContainerHomepage = () => {
  return (
    <div className="three-box-container-homepage">
      <h1>BEST SELLERS</h1>
      <div className="top">
        <div>
          <img src={pizza1} alt="image-here" />
          <h3>Primavera</h3>
          <p>
            Mozzarella, fresh rocket, prosciutto crudo di Parma and olive oil.
          </p>
        </div>
        
        <div>
          <img src={pizza2} alt="image-here" />
          <h3>Saugage and turnip greens</h3>
          <p>
            Grilled italian salsiccia, savory cime di rapa and olive oil.
          </p>
        </div>
        
        <div>
          <img src={pizza3} alt="image-here" />
          <h3>Mozzarella di bufala</h3>
          <p>
            Mozzarella, buffalo mozzarella, cherry tomatoes, basil and olive oil.
          </p>
        </div>

      </div>
      <div className="bottom">
        <h2>
          Beyond the crust: slice your perfect day.
        </h2>
        <p>
          Our doughy delights are just the start. If you need more than a quick bite, explore our savory services: custom topping building, exclusive cheesy deals not found elsewhere, or direct consultation with Mario to match your specific hunger needs with the perfect pizza property.
        </p>
      </div>
    </div>
  )
}