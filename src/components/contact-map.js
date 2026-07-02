import React, { useState } from 'react';

// image (to remove once we have google maps API)
import mapImage from '../img/maps-image.png';


export const ContactMap = () => {
  
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
    <div className="contact-map">
      <div className="contacts-sub-container">
      
        <div className="directions">
          <ul>
            <li>
              MARIO PIZZA RESTAURANT
            </li>
            
            <li>
              53 Rainbow Road
            </li>
            
            <li>
              1234
            </li>
            
            <li>
              Mario Island
            </li>
          </ul>
          
          <ul>

            <li>
              Directions from Highway A2: take the Chocolate Island exit and go towards the Doughnuts Plains.
              Then take the forest of Illusions, going southbound. The fifth block on the left is Mario Pizza.
            </li>
            
            <li>
              Directions with the bus: if you come from downtown Yoshi Island, take the 69 bus going towards the Ghost House and get off at the Vanilla Dome stop (9 stops).
              If you come from Yoshi Island, take the 68 bus going towards Butter Bridge and get off at the Bowser Castle stop (12 stops).
            </li>

          </ul>
          
        </div>
        
        {/* THE OVERLAY (Only shows when an image is clicked) */}
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
        
        <div className="contact-map-image-container" onClick={() => handleImageClick(mapImage)}>
          <img src={mapImage} alt="map-here" />
          <div className="dark"><h3>Click here to enlarge</h3></div>
        </div>
        
      </div>
    </div>
  )
}