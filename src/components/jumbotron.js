import React, { useState } from 'react';
import pizza1 from '../img/1.jpg';
import pizza2 from '../img/2.jpg';
import pizza3 from '../img/3.jpg';
import pizza4 from '../img/4.jpg';
import pizza5 from '../img/5.jpg';
import pizza6 from '../img/6.jpg';
import pizza7 from '../img/7.jpg';
import pizza8 from '../img/8.jpg';
import pizza9 from '../img/9.jpg';

export const Jumbotron = () => {
  // State to track which image is enlarged
  const [enlargedImg, setEnlargedImg] = useState(null);

  // Function to open the overlay
  const handleImageClick = (imgSrc) => {
    setEnlargedImg(imgSrc);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setEnlargedImg(null);
  };

  return (
    <div className="jumbotron">
      <section className="main-container">
        <h1> OUR &nbsp;MEN&Ugrave; </h1>

        {/* 4. THE OVERLAY (Only shows when an image is clicked) */}
        {enlargedImg && (
          <div 
            onClick={closeOverlay}
            style={{
              background: `RGBA(0,0,0,.9) url(${enlargedImg}) no-repeat center`,
              backgroundSize: 'contain',
              width: '100%',
              height: '100%',
              position: 'fixed',
              zIndex: '10000',
              top: '0',
              left: '0',
              cursor: 'pointer'
            }}
          />
        )}

        <div className="container">
          {/* FIRST LINE */}
          <div className="firstLine">
            <div className="box" onClick={() => handleImageClick(pizza1)}>
              <img src={pizza1} alt="pizza1" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>Margherita</h3></div>
            </div>
            <div className="box" onClick={() => handleImageClick(pizza2)}>
              <img src={pizza2} alt="pizza2" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>Pepperoni</h3></div>
            </div>
            <div className="box" onClick={() => handleImageClick(pizza3)}>
              <img src={pizza3} alt="pizza3" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>Sausage &amp; turnip greens</h3></div>
            </div>
          </div>

          {/* SECOND LINE */}
          <div className="secondLine">
            <div className="box" onClick={() => handleImageClick(pizza4)}>
              <img src={pizza4} alt="pizza4" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>Bufala mozzarella</h3></div>
            </div>
            <div className="box" onClick={() => handleImageClick(pizza5)}>
              <img src={pizza5} alt="pizza5" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>Prosciutto crudo &amp; mozzarella</h3></div>
            </div>
            <div className="box" onClick={() => handleImageClick(pizza6)}>
              <img src={pizza6} alt="pizza6" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>Primavera</h3></div>
            </div>
          </div>

          {/* THIRD LINE */}
          <div className="thirdLine">
            <div className="box" onClick={() => handleImageClick(pizza7)}>
              <img src={pizza7} alt="pizza7" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>Yellow tomatoes &amp; burrata</h3></div>
            </div>
            <div className="box" onClick={() => handleImageClick(pizza8)}>
              <img src={pizza8} alt="pizza8" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>Sundried tomatoes &amp; bresaola</h3></div>
            </div>
            <div className="box" onClick={() => handleImageClick(pizza9)}>
              <img src={pizza9} alt="pizza9" style={{ cursor: 'pointer' }} />
              <div className="dark"><h3>4 cheeses</h3></div>
            </div>
          </div>
          
          <div className="jumbotron-btn-container">
            <button type="button" className="my-button-first" style={{padding: "2em 8em", margin: "5em 0em 0em 0em"}}>CLICK HERE TO DOWNLOAD OUR MENU</button>
          </div>
          
        </div>
      </section>
    </div>
  );
};