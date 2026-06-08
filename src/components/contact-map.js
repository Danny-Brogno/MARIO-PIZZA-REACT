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
              Via della Chiesa 8
            </li>
            
            <li>
              87100
            </li>
            
            <li>
              Cosenza
            </li>
          </ul>
          
          <ul>

            <li>
              Directions from Highway A2: take the Cosenza sud exit and go towards the "sopra elevata". Then take Viale Giacomo Mancini, going southbound. The fifth block on the left is Via della Chiesa.
            </li>
            
            <li>
              Directions with the bus: if you come from downtown Cosenza, take the 69 bus going towards Piazza dei Bruzi and get off at the "Chiesa" stop (9 stops). If you come from Rende, take the 68 bus going towards Arcavacata and get off at the "Chiesa" stop (12 stops).
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