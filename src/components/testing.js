import React, { useState } from 'react';


export const Testing = () => {
  
  const [isClicked, setIsClicked] = useState(false);
  
  const toggleClick = () => {
    setIsClicked(true);
  }
  
  return(
    <>{/* FRAGMENT  */}
      <div>
        <button onClick={toggleClick}>
          {isClicked ? "THANKS FOR CLIKING!!!" : "CLICK HERE!"}
        </button>
      </div>
    </>
  )
}