import React, { useEffect } from 'react';
import { UnderHeaderAboutUs } from "../../components/underHeaderAboutUs.js";
import { Banner } from "../../components/banner.js";

import { JumbotronContainerAboutUs } from "../../components/jumbotronContainerAboutUs.js";
// CSS
import '../../style-global.css';
import '../../style-aboutUs.css';
// FAVICON
import favicon1 from '../../img/favicon-aboutUs.png';


export const AboutUs = () => {
  
  // Sctoll to the top logic
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  // Favicon logic
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = favicon1;
  }
  
  return (
    <div id="about-us-page">
      <UnderHeaderAboutUs />
      <Banner />
      <JumbotronContainerAboutUs />
    </div>
  )
}