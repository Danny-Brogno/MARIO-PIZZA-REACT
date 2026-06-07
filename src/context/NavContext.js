// THIS IS A REACT CONTEXT API (LIKE UN UMBRELLA ON TOP OF ALL THE FILES READY TO BE USED BY THEM)

import React, { createContext, useState, useContext } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("homepage");

  return (
    <NavContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom hook so it's super fast to import
export const useNav = () => useContext(NavContext);