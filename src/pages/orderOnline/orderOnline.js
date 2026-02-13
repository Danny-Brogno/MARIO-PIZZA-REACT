import React, { useEffect } from 'react';
import { Jumbotron } from "../../components/jumbotron.js";
import { MakeYourOwnPizza } from "../../components/makeYourOwnPizza.js";
import { RelationshipComponent } from '../../app-test1.js';

// CSS
import '../../style-homepage.css';
import '../../style-global.css';

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
    <div>
      <Jumbotron />
      <MakeYourOwnPizza />
      <RelationshipComponent />
    </div>
  )
}