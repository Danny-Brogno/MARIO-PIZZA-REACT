import React, { useState } from 'react';
import logo from '../img/mario-pizza-logo.png';

export const Header = () => {
  // Create the state. 'isMenuOpen' is false by default.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This replaces showAndHide()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // To handle the "blur" on the <main> tag (which is outside this component)
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.classList.toggle("blur");
    }
    const footerElement = document.querySelector("footer");
    if (footerElement) {
      footerElement.classList.toggle("blur");
    }
    const logoElement = document.querySelector(".logo-container");
    if (logoElement) {
      logoElement.classList.toggle("blur");
    }
  };

  // This replaces leaveMenu()
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.querySelector("main")?.classList.remove("blur");
  };

  return (
    <header>
      <nav>
        <section className="logo-container">
          <a href="index.html">
            <img src={logo} alt="logo-here" />
          </a>
        </section>
        
        <ul>
          <li className="gone">
            <a href="index.html">Home</a>
          </li>
          
          <li class="gone">
            <a href="about-us.html">About us</a>
          </li>
          
          <li class="gone">
            <a href="purchase.html">Purchase</a>
          </li>
          
          <li class="gone">
            <a href="featured.html">Featured</a>
          </li>
          
          <li class="gone">
            <a href="contact-us.html">Contact us</a>
          </li>
          
          <li id="invisible-burger">
            {/* Logic for toggle based on state */}
            <section className={`drop-links ${isMenuOpen ? 'menu-off' : ''}`}>
              <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                <i className="fas fa-bars"></i>
              </button>

              {/* If isMenuOpen is true, we show 'menu-on', otherwise 'hide' */}
              <ul className={`dropdown ${isMenuOpen ? 'menu-on' : 'hide'}`} onMouseLeave={closeMenu}>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </section>
          </li>
          
          
        </ul>
        <section class="searchBar-chart">
          <ol>
            
            <li>
              <a href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            
            <li>
              <input id="input-header" type="text" placeholder="Search.."></input>
            </li>
            
            <li>
              <a href="#">
                <i class="fa-solid fa-question"></i>
              </a>
            </li>
            
            <li>
              <a href="#">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
            
          </ol>
        </section>
      </nav>
    </header>
  );
};