import React from 'react';
import pizza1 from '../img/1.jpg';
import pizza2 from '../img/2.jpg';

export const UnderGridContainer = () => {
  return (
    <div className="under-grid">
    <h2 id="title">MEET OUR STAFF</h2>
          <div className="top">
            <div>
              <i className="fa-solid fa-hotel"></i>
              <h3>Hotelier's eye for details</h3>
              <p>
                We go beyond aesthetics. With years in hotel operations, Tricsy reviews staff training, maintenance standards, and true guest service—the details most tourists miss.
              </p>
            </div>
            
            <div>
              <i className="fa-solid fa-wallet"></i>
              <h3>True value for your money</h3>
              <p>
                Understand what your booking truly covers. We break down the cost-to-quality ratio, evaluating if the price reflects the operational excellence and amenities offered.
              </p>
            </div>
            
            <div>
              <i className="fa-solid fa-clipboard-check"></i>
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
            <section className="wrapped-text-section">
              <div className="circle circle1">
                <img src={pizza1} alt="pizza1" />
              </div>
              <div className="circle circle2">
                <img src={pizza2} alt="pizza2" />
              </div>
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </section>
          </div>
        </div>
  )
}