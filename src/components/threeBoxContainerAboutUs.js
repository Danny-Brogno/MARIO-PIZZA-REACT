import React from 'react';
import pizza15 from '../img/15.jpg';
import pizza16 from '../img/16.jpg';
import pizza28 from '../img/28.jpg';

// --------------------------
export const ThreeBoxContainerAboutUs = () => {
  return (
    <div className="three-box-container-aboutUs">
    <h1>OUR VALUES</h1>
      <div className="top">
        <div>
          <img src={pizza15} alt="pizza-here" />
          <h3>Uncompromising Quality</h3>
          <p>
            We believe that a great pizza starts with the integrity of its ingredients. 
            From our 48-hour slow-fermented dough to the sun-ripened San Marzano tomatoes, we never take shortcuts. 
          </p>
        </div>
        
        <div>
          <img src={pizza16} alt="pizza-here" />
          <h3>Mastered Consistency</h3>
          <p>
            A perfect pizza is not a lucky accident but a guarantee. 
            Our core value is the mastery of the process, ensuring that every wood-fired crust has the same perfect char and every topping is balanced to precision. 
          </p>
        </div>
        
        <div>
          <img src={pizza28} alt="pizza-here" />
          <h3>Community Connection</h3>
          <p>
            A pizzeria is more than just a place to eat. It's a gathering for friends and families. 
            We value the relationships we build across the counter and are dedicated to giving back to the community that supports us.
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