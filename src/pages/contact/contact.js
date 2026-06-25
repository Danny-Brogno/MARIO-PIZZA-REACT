import React, { useEffect } from 'react';

// COMPONENTS 
import { Banner1 } from "../../components/banner1.js";
import { ContactForm } from "../../components/contact-form.js";
import { ContactMap } from "../../components/contact-map.js";

// CSS
import '../../style-global.css';
import '../../style-contact.css';

// FAVICON
import faviconContactPage from '../../img/favicon-contact.png';

// --------------------------
export const ContactPage = () => {
  
  useEffect(() => {
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Set Title
    document.title = "Mario Pizza | Contacts";

    // Set Favicon
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = faviconContactPage;
    }
  }, []);
  
  return (
    <div id="contact-page">
      <ContactForm />
      <ContactMap />
      <Banner1 />
    </div>
  )
}