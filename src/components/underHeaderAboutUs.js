import React from 'react';
import aboutPizza1 from '../img/about-image-1.jpg'; 
import aboutPizza2 from '../img/about-image-2.jpg';
import aboutPizza3 from '../img/about-image-3.jpg';
import aboutPizza4 from '../img/about-image-4.jpg';
import aboutPizza5 from '../img/about-image-5.jpg';
import aboutPizza6 from '../img/about-image-6.jpg';
import aboutPizza7 from '../img/about-image-7.jpg';

export const UnderHeaderAboutUs = () => {
  
  return (
    <div className="about-us-container">
      
      <div className="central-container">

        <div className="top">
        </div>
        
        <div className="center">
        </div>
        
        <div className="bottom">
        </div>
        
      </div>
      
      <div className="under-grid">
        <div className="top">
          <div>
            <i className="fa-solid fa-pizza-slice"></i>
            <h3>Hotelier's eye for details</h3>
            <p>
              We go beyond aesthetics. With years in hotel operations, Tricsy reviews staff training, maintenance standards, and true guest service—the details most tourists miss.
            </p>
          </div>
          
          <div>
            <i className="fa-solid fa-car"></i>
            <h3>True value for your money</h3>
            <p>
              Understand what your booking truly covers. We break down the cost-to-quality ratio, evaluating if the price reflects the operational excellence and amenities offered.
            </p>
          </div>
          
          <div>
            <i className="fa-solid fa-globe"></i>
            <h3>Behind-the-scenes insights</h3>
            <p>
              Get an honest look at the operational efficiency and management. Tricsy provides the critical perspective only an insider can offer, ensuring you book with confidence.
            </p>
          </div>

        </div>
        <div className="bottom">
          <h2>
            Beyond the review: plan Your Perfect Stay
          </h2>
          <p>
            Our video reviews are just the start. If you need more than a look inside, explore our premium services: custom itinerary building, exclusive hotel deals not found elsewhere, or direct consultation with Tricsy to match your specific travel needs with the perfect hotel property
          </p>
        </div>
      </div>

      <div className="set">
        <div><img src={aboutPizza1} alt="" /></div>
        <div><img src={aboutPizza2} alt="" /></div>
        <div><img src={aboutPizza3} alt="" /></div>
        <div><img src={aboutPizza4} alt="" /></div>
        <div><img src={aboutPizza5} alt="" /></div>
        <div><img src={aboutPizza6} alt="" /></div>
        <div><img src={aboutPizza7} alt="" /></div>
        <div><img src={aboutPizza1} alt="" /></div>
      </div>

      <div className="set set2">
      <div><img src={aboutPizza2} alt="" /></div>
      <div><img src={aboutPizza3} alt="" /></div>
      <div><img src={aboutPizza4} alt="" /></div>
      <div><img src={aboutPizza5} alt="" /></div>
      <div><img src={aboutPizza6} alt="" /></div>
      <div><img src={aboutPizza7} alt="" /></div>
      <div><img src={aboutPizza1} alt="" /></div>
      <div><img src={aboutPizza2} alt="" /></div>
      </div>

      <div className="set set3">
      <div><img src={aboutPizza3} alt="" /></div>
      <div><img src={aboutPizza4} alt="" /></div>
      <div><img src={aboutPizza5} alt="" /></div>
      <div><img src={aboutPizza6} alt="" /></div>
      <div><img src={aboutPizza7} alt="" /></div>
      <div><img src={aboutPizza1} alt="" /></div>
      <div><img src={aboutPizza2} alt="" /></div>
      <div><img src={aboutPizza3} alt="" /></div>
      </div>

    </div>
  );
};