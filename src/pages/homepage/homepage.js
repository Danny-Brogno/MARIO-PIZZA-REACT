import React, { useEffect } from 'react';
import { UnderHeader } from "../../components/underHeader.js";
import { Jumbotron } from "../../components/jumbotron.js";
import { Banner } from "../../components/banner.js";
import { JumbotronContainer } from "../../components/jumbotronContainer.js";
import { UnderGridContainer } from "../../components/underGridContainer.js";
// CSS
import '../../style-global.css';
import '../../style-homepage.css';
// FAVICON
import favicon from '../../img/favicon-homepage.png';

export const HomePage = () => {
  
  // Scroll to the top logic
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  // Favicon logic
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = favicon;
  }
  
  return (
    <div id="homepage">
      <UnderHeader />
      <Jumbotron />
      <Banner />
      <JumbotronContainer />
      <UnderGridContainer />
    </div>
  )
}