import React, { useEffect } from 'react';

// COMPONENTS
import { UnderHeaderAboutUs } from "../../components/underHeaderAboutUs.js";
import { MeetOurStaffContainer } from "../../components/meetOurStaffContainer.js";
import { Banner1 } from "../../components/banner1.js";
import { ThreeBoxContainerAboutUs } from "../../components/threeBoxContainerAboutUs.js";

// CSS
import '../../style-global.css';
import '../../style-aboutUs.css';

// FAVICON
import faviconAboutUsPage from '../../img/favicon-aboutUs.png';

// --------------------------
export const AboutUs = () => {
  
  useEffect(() => {
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Set Title
    document.title = "Mario Pizza | About us";

    // Set Favicon
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = faviconAboutUsPage;
    }
  }, []);
  
  return (
    <div id="about-us-page">
      <UnderHeaderAboutUs />
      <Banner1 />
      <MeetOurStaffContainer />
      <ThreeBoxContainerAboutUs />
    </div>
  )
}