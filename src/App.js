import React, { useState, useEffect } from 'react';
// ELEMENTS THAT ARE IN EVERY PAGE
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
// OTHER PAGES
import { HomePage } from './pages/homepage/homepage.js';
import {ContactPage} from "./pages/contact/contact.js";
import {AboutUs} from "./pages/aboutUs/aboutUs.js";
import {OrderOnline} from "./pages/orderOnline/orderOnline.js";

// LOGIC
function App() {
  
  const [currentPage, setCurrentPage] = useState("homepage");
  
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      {currentPage === "homepage" && <HomePage />}
      {currentPage === "contact" && <ContactPage />}
      {currentPage === "aboutUs" && <AboutUs />}
      {currentPage === "orderOnline" && <OrderOnline />}
      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
}

export default App;