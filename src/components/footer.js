import React from 'react';
import { useNav } from '../context/NavContext.js';

import logo from '../img/mario-pizza-logo.png';

const scrollToTheTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

export const Footer = () => {
  const { setCurrentPage } = useNav();
  return (
    
    <footer id="footer-global">
      <section>
        
        <div className="top-footer">
          <h3>
            &copy;Mario Pizza. All rights reserved.
          </h3>
        </div>
        
        <div className="middle-footer">
          {/* LEFT COLUMN */}
          <ul className="footer-links-left">
            <li className="gone"><button type="button" onClick={()=>setCurrentPage("homepage")}>HOME</button></li>
            <li className="gone"><button type="button" onClick={()=>setCurrentPage("aboutUs")}>ABOUT US</button></li>
            <li className="gone"><button type="button" onClick={()=>setCurrentPage("orderOnline")}>ORDER ONLINE</button></li>
            <li className="gone"><button type="button" onClick={()=>setCurrentPage("contact")}>CONTACT US</button></li>
          </ul>
        
          {/* CENTER COLUMN: THE IMAGE */}
          <div className="footer-logo-center">
            <img src={logo} alt="Mario Pizza Logo" />
          </div>
        
          {/* RIGHT COLUMN */}
          <ul className="footer-links-right">
            <li className="gone"><button type="button">DOWNLOAD MENU</button></li>
            <li className="gone"><button type="button">PROMOS</button></li>
            <li className="gone"><button type="button">MEET OUR STAFF</button></li>
            <li className="gone"><button type="button">SUPER STAR PIZZA PASS</button></li>
          </ul>
        </div>
        
        <div className="bottom-footer">
          
          <span>
            <a href="http://facebook.com/danny.brogno" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </span>
          
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
          
          <span>
            <i className="fa-brands fa-linkedin"></i>
          </span>
          
          <span>
            <i className="fa-brands fa-x-twitter"></i>
          </span>
          
          <span>
            <i className="fa-brands fa-tiktok"></i>
          </span>
        </div>
        
        <div className="copy-right">
          <p>&copy; 2026 Danny Brogno. All Rights Reserved.</p>
        </div>

        
        <div className="scroll-top-btn" onClick={scrollToTheTop}>
          <ul>
            <li>
              <i className="fas fa-chevron-up"></i>
            </li>
          </ul>
        </div>
        
      </section>
      
    </footer>
  );
};