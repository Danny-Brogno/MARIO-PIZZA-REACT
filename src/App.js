import React from 'react';
import { NavProvider, useNav } from './context/NavContext.js';

// ELEMENTS THAT ARE IN EVERY PAGE
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
// OTHER PAGES
import { HomePage } from './pages/homepage/homepage.js';
import { ContactPage } from "./pages/contact/contact.js";
import { AboutUs } from "./pages/aboutUs/aboutUs.js";
import { OrderOnline } from "./pages/orderOnline/orderOnline.js";
import { Cart } from "./pages/cart/cart.js";

function AppContent() {
  const { currentPage } = useNav();

  return (
    <div className="App">

      <Header /> 
      
      {currentPage === "homepage" && <HomePage />}
      {currentPage === "contact" && <ContactPage />}
      {currentPage === "aboutUs" && <AboutUs />}
      {currentPage === "orderOnline" && <OrderOnline />}
      {currentPage === "cart" && <Cart />}
      
      <Footer />
      
    </div>
  );
}

// So because of prop drilling
// If I wanted to use the setCurrentPage function, that was in App, I needed to drill through the first child of App, which is homepage
// THEN drill again to its componet: makeYourOwnPizza
// So instead of repeating the code twice, I made a "twin" app element that manages only that transition from page to page, giving the function setCurrentPage to whomever requests it, no matter how down inside a sub-componet it it.
// And all the component needs to perform this page switch (no matter where he is) it's these 2 lines:
// import { useNav } from '../context/NavContext.js';
// const { currentPage, setCurrentPage } = useNav(); 

export default function App() {
  return (
    <NavProvider>
      <AppContent />
    </NavProvider>
  );
}