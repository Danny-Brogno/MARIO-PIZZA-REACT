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
            &copy; 2026 Danny Brogno. All Rights Reserved.
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
            <li className="gone">
              <a 
                href="/Mario_Pizza_Menu.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }} // Prevents link underlining
              >
                <button type="button">
                  DOWNLOAD MENU
                </button>
              </a>
            </li>
            <li className="gone"><button type="button">PROMOS</button></li>
            <li className="gone"><button type="button">MEET OUR STAFF</button></li>
            <li className="gone"><button type="button">SUPER STAR PIZZA PASS</button></li>
          </ul>
        </div>
        
        <ul className="bottom-footer">
          
          <li>
            <a href="http://facebook.com/danny.brogno" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          
          <li>
            <i className="fa-brands fa-x-twitter"></i>
          </li>
          
          <li>
            <i className="fa-brands fa-tiktok"></i>
          </li>
        </ul>
        
        <div className="copy-right">
          <p>
          
          </p>
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