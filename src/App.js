import favicon from './img/favicon.png';
import React, { useState, useEffect } from 'react';

import {Header} from "./components/header.js";
import {HomePage} from "./pages/home/index.js";
import {ContactPage} from "./pages/contact/index.js";
import {AboutUs} from "./pages/aboutUs/index.js";
import {OrderOnline} from "./pages/orderOnline/index.js";
import {Footer} from "./components/footer.js";
import './App.css';

const link = document.querySelector("link[rel~='icon']");
if (link) {
  link.href = favicon;
}

function App() {
  
  const [currentPage, setCurrentPage] = useState("home");
  
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      {currentPage == "home" && <HomePage />}
      {currentPage == "contact" && <ContactPage />}
      {currentPage == "aboutUs" && <AboutUs />}
      {currentPage == "orderOnline" && <OrderOnline />}
      <Footer />
    </div>
  );
}

export default App;
