import React, { useState, useEffect } from 'react'; // Import hooks
import pizza10 from '../img/10.jpg';
import pizza11 from '../img/11.jpg';
import pizza12 from '../img/12.jpg';
import pizza13 from '../img/13.jpg';
import pizza14 from '../img/14.jpg';

export const Banner = () => {
  // 1. Create state to track if the overlay is open
  const [isNavOpen, setIsNavOpen] = useState(false);

  // 2. Logic to handle the body overflow (prevents scrolling when overlay is open)
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    
    // Cleanup function to ensure class is removed if component unmounts
    return () => document.body.classList.remove("overflow-hidden");
  }, [isNavOpen]);

  // 3. Translated functions
  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="banner">
      <div className="top">
        <h2>
          ORDER ONLINE OR GET IN TOUCH BY CLICKING 
          <b className="contact-now" onClick={openNav}> HERE</b>
        </h2>

        {/* 4. The Overlay (controlled by isNavOpen state) */}
        <div 
          id="myNav" 
          className="overlay" 
          style={{ 
            display: "block", 
            height: isNavOpen ? "100%" : "0%",
            visibility: isNavOpen ? "visible" : "hidden",
            transition: "0.5s" 
          }}
        >
          {/* Close Button */}
          <button 
            className="closebtn" 
            onClick={closeNav}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            &times;
          </button>

          <div className="overlay-content">
            <div className="inside">
              <section className="big">
                <h3>CONTACT US</h3>
              </section>

              <section>
                <div className="left">
                  <div className="upper">
                    <label htmlFor="myDropdown">Please select a topic for your enquiry *</label>
                    <select name="myDropdown" id="myDropdown" required>
                      <option value="option1">You don't like our pizza</option>
                      <option value="option2">You love our pizza</option>
                      <option value="option3">You wanna work with us</option>
                      <option value="option4">You feel sick after eating our pizza</option>
                    </select>
                  </div>

                  <div className="lower">
                    <textarea 
                      name="Text1" 
                      cols="40" 
                      rows="7" 
                      placeholder="Hello my name is Luigi and I love your pizza..." 
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="right">
                  <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname" required />
                  </div>
                  <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" id="lastname" name="lastname" required />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
              </section>
              
              <section>
                <button type="button" name="button">SEND</button>
              </section>
            </div>
          </div>
        </div>
      </div>

      <section className="banner-section">
        <div className="one"><img src={pizza10} alt="pizza10" /></div>
        <div className="two"><img src={pizza11} alt="pizza11" /></div>
        <div className="three"><img src={pizza12} alt="pizza12" /></div>
        <div className="four"><img src={pizza13} alt="pizza13" /></div>
        <div className="five"><img src={pizza14} alt="pizza14" /></div>
      </section>
    </div>
  );
};


