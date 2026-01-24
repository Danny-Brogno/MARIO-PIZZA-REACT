import React from 'react';
import pizza1 from '../img/15.jpg';
import pizza2 from '../img/16.jpg';
import pizza3 from '../img/15.jpg';


export const ThreeBoxContainer = () => {
  return (
    <div className="three-box-container">
    <h1>OUR VALUES</h1>
      <div className="top">
        <div>
          <img src={pizza1} alt="image-here" />
          <h3>Hotelier's eye for details</h3>
          <p>
            We go beyond aesthetics. With years in hotel operations, Tricsy reviews staff training, maintenance standards, and true guest service—the details most tourists miss.
          </p>
        </div>
        
        <div>
          <img src={pizza2} alt="image-here" />
          <h3>True value for your money</h3>
          <p>
            Understand what your booking truly covers. We break down the cost-to-quality ratio, evaluating if the price reflects the operational excellence and amenities offered.
          </p>
        </div>
        
        <div>
          <img src={pizza3} alt="image-here" />
          <h3>Behind-the-scenes insights</h3>
          <p>
            Get an honest look at the operational efficiency and management. Tricsy provides the critical perspective only an insider can offer, ensuring you book with confidence.
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