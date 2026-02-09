import React, { useEffect } from 'react';
import { RelationshipComponent } from '../../app-test1';

// CSS
import '../../style-homepage.css';

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
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <h1>ORDER ONLINE</h1>
      <RelationshipComponent />
    </div>
  )
}