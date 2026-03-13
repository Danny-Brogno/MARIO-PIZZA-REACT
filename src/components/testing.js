import React, { useState } from 'react';


export const Testing = () => {
  
  const [isClicked, setIsClicked] = useState(false);
  
  const toggleClick = () => {
    setIsClicked(true);
  }
  
  return (
    <button onClick={toggleClick}>
      {isClicked ? "I have been clicked!" : "Click me!"}
    </button>
  )
}