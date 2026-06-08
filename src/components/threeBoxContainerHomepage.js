import React, { useState } from 'react';
import { useNav } from '../context/NavContext.js';

import pizza1 from '../img/27.jpg';
import pizza2 from '../img/31.jpg';
import pizza3 from '../img/32.jpg';

// --------------------------
export const ThreeBoxContainerHomepage = () => {
  
  // CONTEXT -> makes us switch pages
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
  
  return (
    <div className="three-box-container-homepage">
      <h1>BEST SELLERS</h1>
      
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
      
      <div className="top">
        <div>
          <img src={pizza1} alt="image-here" onClick={() => handleImageClick(pizza1)}/>
          <h3>Primavera</h3>
          <p>
            Mozzarella, fresh rocket, prosciutto crudo di Parma and olive oil.
          </p>
          <button type="button" className="my-button-first" style={{margin: "3em 0em 2em 0em"}} onClick={()=>setCurrentPage("orderOnline")}>
            ORDER NOW
          </button>
        </div>
        
        <div>
          <img src={pizza2} alt="image-here" onClick={() => handleImageClick(pizza2)}/>
          <h3>Saugage and turnip greens</h3>
          <p>
            Grilled italian salsiccia, savory cime di rapa and olive oil.
          </p>
          <button type="button" className="my-button-first" style={{margin: "3em 0em 2em 0em"}} onClick={()=>setCurrentPage("orderOnline")}>
            ORDER NOW
          </button>
        </div>
        
        <div>
          <img src={pizza3} alt="image-here" onClick={() => handleImageClick(pizza3)}/>
          <h3>Mozzarella di bufala</h3>
          <p>
            Mozzarella, buffalo mozzarella, cherry tomatoes, basil and olive oil.
          </p>
          <button type="button" className="my-button-first" style={{margin: "3em 0em 2em 0em"}} onClick={()=>setCurrentPage("orderOnline")}>
            ORDER NOW
          </button>
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