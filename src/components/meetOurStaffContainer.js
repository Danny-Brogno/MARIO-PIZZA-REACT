import React from 'react';
import pizza15 from '../img/15.jpg';
import pizza16 from '../img/16.jpg';
import pizza17 from '../img/17.jpg';
import pizza18 from '../img/18.jpg';
import pizza19 from '../img/19.jpg';
import pizza26 from '../img/26.jpg';

export const MeetOurStaffContainer = () => {
  return (
    <div className="meet-our-staff-container">
      <h2 id="title">MEET OUR STAFF</h2>
          <div className="top">
          
            <div>
              <img src={pizza17} alt="pizza17" />
              <h3>Mario</h3>
              <p>
                He goes beyond toppings. With years at roaring ovens, Mario masters dough hydration, woodfire temperatures, and authentic crust flavor the details most diners miss.
              </p>
            </div>
            
            <div>
              <img src={pizza18} alt="pizza18" />
              <h3>Luigi</h3>
              <p>
                Precision meets pure speed. Luigi handles dough, firing artisan pies quickly before racing through traffic so every delivery arrives as fast as the wind.
              </p>
            </div>
            
            <div>
              <img src={pizza19} alt="pizza19" />
              <h3>Peach</h3>
              <p>
                Affection fuels her recipes. Peach infuses heartfelt devotion into every meal, ensuring lucky guests fall deeply in love with those wonderful flavors shared together.
              </p>
            </div>
            <div>
              <img src={pizza26} alt="pizza26" />
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
                <img src={pizza15} alt="pizza15" />
              </div>

              {/* Pizza 2 */}
              <div className="circle circle2">
                <div className="pizza__smoke"></div>
                <img src={pizza16} alt="pizza16" />
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