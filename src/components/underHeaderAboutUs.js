import React, { useEffect } from 'react';
import aboutPizza1 from '../img/favicon-aboutUs.png'; 
import aboutPizza2 from '../img/favicon-homepage.png';
import aboutPizza3 from '../img/favicon-contact.png'; 
import aboutPizza4 from '../img/favicon-orderOnline.png';
import aboutPizza5 from '../img/favicon-random1.png'; 
import aboutPizza6 from '../img/favicon-random2.png';
import pizzaBackground from '../img/about-us-under-header-image.png';

import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting.js';
import Splitting from 'splitting';

export const UnderHeaderAboutUs = () => {
  
  useEffect(() => {
    // We call the function inside useEffect so React ensures 
    // the HTML is ready before the "splitting" happens.
    Splitting();
  }, []);
  
  return (
    <div className="under-header-AboutUs">
      
      <div className="central-container">

        <div className="top">
          <h1>ABOUT US</h1>
        </div>
        
        <div className="center">
        
          <div>
            <p data-splitting>
              In 1925, Mario traded his plumbing wrench for a rolling pin, realizing that fixing leaky pipes was far less lucrative than feeding the masses. Legend says he discovered the "Secret Sauce" after accidentally dropping a Fire Flower into a vat of San Marzano tomatoes—giving the crust its signature kick. Alongside Peach, who brought royal standards to the kitchen (and kept Mario from jumping on the customers), they built an empire. Today, we’ve traded the pixelated apron for premium dough, but our mission remains: rescuing you from mediocre meals. One slice, and you’ll realize the princess isn't in another castle—she’s here, eating pepperoni.
            </p>
          </div>
          
          <div>
            <img src={pizzaBackground} alt="image-here" />
          </div>
          
          <div>
            <p data-splitting>
              In 1925, Mario left the comfort of the familiar to honor a heritage written in flour and sweat. It wasn't about games; it was about the sacrifice of a man who worked until his hands were stained with the earth of Italy. He brought nothing but a sourdough starter and recipes whispered by his grandmother under the Tuscan sun. Every dough ball is aged for forty-eight hours, a testament to the patience that true craft demands. We don't cut corners; we honor the legacy of hard-earned tradition, serving authentic, wood-fired history that tastes of home and heart.
            </p>
          </div>
          
        </div>
        
        <div className="bottom">
          <button type="button">CLICK HERE TO DOWNLOAD OUR MENU</button>
        </div>
        
      </div>
      
      <div className="set">
        <div><img src={aboutPizza1} alt="" /></div>
        <div><img src={aboutPizza2} alt="" /></div>
        <div><img src={aboutPizza3} alt="" /></div>
        <div><img src={aboutPizza4} alt="" /></div>
        <div><img src={aboutPizza5} alt="" /></div>
        <div><img src={aboutPizza6} alt="" /></div>
        <div><img src={aboutPizza1} alt="" /></div>
        <div><img src={aboutPizza2} alt="" /></div>
      </div>

      <div className="set set2">
        <div><img src={aboutPizza3} alt="" /></div>
        <div><img src={aboutPizza4} alt="" /></div>
        <div><img src={aboutPizza5} alt="" /></div>
        <div><img src={aboutPizza6} alt="" /></div>
        <div><img src={aboutPizza1} alt="" /></div>
        <div><img src={aboutPizza2} alt="" /></div>
        <div><img src={aboutPizza3} alt="" /></div>
        <div><img src={aboutPizza4} alt="" /></div>
      </div>

      <div className="set set3">
        <div><img src={aboutPizza5} alt="" /></div>
        <div><img src={aboutPizza6} alt="" /></div>
        <div><img src={aboutPizza1} alt="" /></div>
        <div><img src={aboutPizza2} alt="" /></div>
        <div><img src={aboutPizza3} alt="" /></div>
        <div><img src={aboutPizza4} alt="" /></div>
        <div><img src={aboutPizza5} alt="" /></div>
        <div><img src={aboutPizza6} alt="" /></div>
      </div>

    </div>
  );
};