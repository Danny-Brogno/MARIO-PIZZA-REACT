import React, { useState, useEffect } from 'react';
import logo from '../img/mario-pizza-logo.png';

export const Header = ({currentPage, setCurrentPage}) => {
  

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

  // Toggles the burger menu and the blur effect on background elements
  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    // Select all elements that need the blur effect
    const elementsToBlur = [
      ".under-header",
      "main",
      "footer",
      ".logo-container",
      ".banner",
      ".jumbotron-container"
    ];
    
    elementsToBlur.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) {
        el.classList.toggle("blur");
      }
    });
  };

  // Closes the menu and explicitly removes the blur from the main content
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.querySelector("main")?.classList.remove("blur");
    
    // Also remove blur from other elements to be safe
    const elements = document.querySelectorAll(".blur");
    elements.forEach(el => el.classList.remove("blur"));
  };

  return (
    <header id="header-global" style={{ top: headerTop }}>
      <nav id="navbar">
        <section className="logo-container">
          <a href="" onClick={()=>setCurrentPage("homepage")}>
            <img src={logo} alt="logo-here" />
          </a>
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
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </section>
          </li>
        </ul>
      </nav>
    </header>
  );
};