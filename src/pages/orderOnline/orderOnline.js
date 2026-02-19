import React, { useEffect } from 'react';
import {UnderHeaderOrderOnline} from "../../components/underHeaderOrderOnline.js";
import { MakeYourOwnPizza } from "../../components/makeYourOwnPizza.js";
import { Banner2 } from "../../components/banner2.js";

// CSS
import '../../style-global.css';
import '../../style-orderOnline.css';

// FAVICON
import favicon from '../../img/favicon-homepage.png';


export const OrderOnline = () => {
  
  useEffect(() => {
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Set Title
    document.title = "Mario Pizza | Order Online";

    // Set Favicon
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon;
    }
  }, []);
  
  return (
    <div id="order-online">
      <UnderHeaderOrderOnline />
      <MakeYourOwnPizza />
      <Banner2 />
    </div>
  )
}