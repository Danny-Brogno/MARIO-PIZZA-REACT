import React, { useState, useEffect } from 'react';
import { useNav } from '../context/NavContext.js';

import logo from '../img/mario-pizza-logo.png';

export const Header = () => {
  // THIS IS FOR THE CONTEXT
  const { setCurrentPage } = useNav();
  
  // HEADER APPEARING ON SCROLL - START
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // the header's top position (hidden at -150px by default)
  const [headerTop, setHeaderTop] = useState("-100px");

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 20px, show the header at top: 0
      if (window.scrollY > 20) {
        setHeaderTop("0");
      } else {
        setHeaderTop("-100px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is removed
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // HEADER APPEARING ON SCROLL - END

  // BLUR EFFECT - START
  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false); // Closes the mobile menu state
    
    // Explicitly wipes out all blurs upon changing the page
    const blurredElements = document.querySelectorAll(".blur");
    blurredElements.forEach(el => el.classList.remove("blur"));
  };

  // The explicit toggle menu logic (Without logo-container, using explicit .add / .remove)
  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    const elementsToBlur = [
      ".under-header",
      ".under-header-AboutUs",
      ".under-header-orderOnline",
      ".jumbotron",
      ".jumbotron-scrolling-carousel",
      ".meet-our-staff-container",
      ".three-box-container-homepage",
      ".three-box-container-aboutUs",
      ".banner",
      ".banner.two",
      ".make-your-own-pizza",
      ".jumbotron-static-image",
      ".container-form",
      ".contact-map",
      "footer"
    ];
    
    elementsToBlur.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) {
        if (newState) {
          el.classList.add("blur");
        } else {
          el.classList.remove("blur");
        }
      }
    });
  };

  // Simple safety backup menu close handler for mouse leave event
  const closeMenu = () => {
    setIsMenuOpen(false);
    const elements = document.querySelectorAll(".blur");
    elements.forEach(el => el.classList.remove("blur"));
  };

  // BLUR EFFECT - END

  return (
    <header id="header-global" style={{ top: headerTop }}>
      <nav id="navbar">
        <section className="logo-container">
          <span onClick={()=>setCurrentPage("homepage")}>
            <img src={logo} alt="logo-here" />
          </span>
        </section>
        
        <ul>

          <li className="gone" onClick={()=>setCurrentPage("homepage")}>
            <span><div></div></span>
            <span><div></div></span>
            <span><div></div></span>
            <span><div></div></span>
            <span><h2>HOME</h2></span>
          </li>

            <li className="gone" onClick={()=>setCurrentPage("aboutUs")}>
              <span><div></div></span>
              <span><div></div></span>
              <span><div></div></span>
              <span><div></div></span>
              <span><h2>ABOUT US</h2></span>
            </li>

            <li className="gone" onClick={()=>setCurrentPage("orderOnline")}>
              <span><div></div></span>
              <span><div></div></span>
              <span><div></div></span>
              <span><div></div></span>
              <span><h2>ORDER ONLINE</h2></span>
            </li>

            <li className="gone" onClick={()=>setCurrentPage("contact")}>
              <span><div></div></span>
              <span><div></div></span>
              <span><div></div></span>
              <span><div></div></span>
              <span><h2>CONTACT US</h2></span>
            </li>
          
          <li id="invisible-burger">
            <section className={`drop-links ${isMenuOpen ? 'menu-off' : ''}`}>
              <button 
                onClick={toggleMenu} 
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <i className="fas fa-bars"></i>
              </button>
              
              <ul className={`dropdown ${isMenuOpen ? 'menu-on' : 'hide'}`} onMouseLeave={closeMenu}>
                <li>
                  <span onClick={() => handlePageChange("homepage")}>
                    Home
                  </span>
                </li>
                <li>
                  <span onClick={() => handlePageChange("aboutUs")}>
                    About
                  </span>
                </li>
                <li>
                  <span onClick={() => handlePageChange("orderOnline")}>
                    Order online
                  </span>
                </li>
                <li>
                  <span onClick={() => handlePageChange("contact")}>
                    Contact
                  </span>
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </nav>
    </header>
  );
};