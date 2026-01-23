import React, { useEffect } from 'react';
import { UnderHeaderAboutUs } from "../../components/underHeaderAboutUs.js";
// CSS
import '../../style-global.css';
import '../../style-aboutUs.css';
// FAVICON
import favicon1 from '../../img/favicon-aboutUs.png';


export const AboutUs = () => {
  
  // Scroll to the top logic
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  // Favicon logic
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = favicon1;
  }
  
  return (
    <div id="about-us">
      <UnderHeaderAboutUs />
    </div>
  )
}