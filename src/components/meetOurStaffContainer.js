import React, { useState } from 'react';
import mario from '../img/staff-mario.jpg';
import luigi from '../img/staff-luigi.jpg';
import peach from '../img/staff-peach.jpg';
import daisy from '../img/staff-daisy.jpg';
import pizza29 from '../img/29.jpg';
import pizza30 from '../img/30.jpg';

export const MeetOurStaffContainer = () => {
  
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
    <div className="meet-our-staff-container">
      <h2 id="title">MEET OUR STAFF</h2>
          <div className="top">

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

            <div>
              <img src={mario} alt="mario" onClick={() => handleImageClick(mario)} />
              <h3>Mario</h3>
              <p>
                He goes beyond toppings. With years at roaring ovens, Mario masters dough hydration, woodfire temperatures, and authentic crust flavor the details most diners miss.
              </p>
            </div>
            
            <div>
              <img src={luigi} alt="luigi" onClick={() => handleImageClick(luigi)} />
              <h3>Luigi</h3>
              <p>
                Precision meets pure speed. Luigi handles dough, firing artisan pies quickly before racing through traffic so every delivery arrives as fast as the wind (guaranteed)!
              </p>
            </div>
            
            <div>
              <img src={peach} alt="peach" onClick={() => handleImageClick(peach)} />
              <h3>Peach</h3>
              <p>
                Affection fuels her recipes. Peach infuses heartfelt devotion into every meal, ensuring lucky guests fall deeply in love with those wonderful flavors shared together.
              </p>
            </div>
            <div>
              <img src={daisy} alt="daisy" onClick={() => handleImageClick(daisy)} />
              <h3>Daisy</h3>
              <p>
                Stunning beauty defines every creation. Daisy crafts visually perfect pizzas while her enchanting voice captivates guests, making everyone fall completely in love.
              </p>
            </div>

          </div>
          <div className="bottom">
            <h2>
              Our quality? Love at first slice.
            </h2>
            
            <section className="wrapped-text-section">
              {/* The SVG Mask Definition (Only need this once in the file) */}
              <svg height="0" width="0" style={{ position: 'absolute' }}>
                <defs>
                  <mask id="smoke-mask-element" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                    <radialGradient id="g" gradientUnits="objectBoundingBox" fx="50%" fy="90%" cx="50%" cy="50%" r="50%">
                      <stop stopColor="white" offset="0"/>
                      <stop stopColor="white" stopOpacity="0" offset="1"/>
                    </radialGradient>
                    <rect x="0" y="0" width="1" height="1" fill="url(#g)"/>
                  </mask>
                </defs>
              </svg>

              {/* Pizza 1 */}
              <div className="circle circle1">
                <div className="pizza__smoke"></div>
                <img src={pizza29} alt="pizza29" />
              </div>

              {/* Pizza 2 */}
              <div className="circle circle2">
                <div className="pizza__smoke"></div>
                <img src={pizza30} alt="pizza30" />
              </div>

              <div className="">
                <p>
                  Forget that sad, greasy cardboard circle lurking in your freezer or the soggy disappointment delivered by a teenager in a hatchback. 
                  We treat dough like a fine vintage wine, letting it ferment until it develops a personality more complex than your favorite indie film protagonist. 
                  Our flour is so refined it probably has a PhD, and our tomatoes are literally glowing beauties from volcanic soils, not some dusty tin. 
                  We do not throw cheese around; we curate a dairy symphony that melts with the grace of a professional ballroom dancer. 
                  Each pepperoni is placed with the surgical precision of a NASA engineer, ensuring that every single bite offers a mathematical equilibrium of spice, salt, and soul.
                </p>
              </div>
            </section>
            
          </div>
        </div>
  )
}