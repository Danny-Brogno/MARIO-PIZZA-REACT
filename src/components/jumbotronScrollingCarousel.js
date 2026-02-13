import React, { useState, useEffect } from 'react';
import pizza1 from '../img/1.jpg';
import pizza2 from '../img/2.jpg';
import pizza3 from '../img/3.jpg';
import pizza4 from '../img/4.jpg';
import pizza5 from '../img/5.jpg';
import pizza6 from '../img/6.jpg';
import pizza7 from '../img/7.jpg';
import pizza8 from '../img/8.jpg';
import pizza9 from '../img/9.jpg';

export const JumbotronScrollingCarousel = () => {
  // Store the images in an array for easy mapping
  const images = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, pizza9];
  
  // Track which image is currently visible
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up the timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changed to 3s to account for fade time

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="jumbotron-scrolling-carousel">
      <section>
        <div className="container-left">
          <ul id="slider" style={{ position: 'relative', listStyle: 'none', padding: 0 }}>
            {images.map((img, index) => (
              <li 
                key={index} 
                className="slide"
                style={{
                  position: index === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  opacity: currentIndex === index ? 1 : 0,
                  transition: 'opacity 1s ease-in-out', // This replaces jQuery .fadeOut/.fadeIn
                  zIndex: currentIndex === index ? 1 : 0
                }}
              >
                <img src={img} alt={`pizza${index}`} />
              </li>
            ))}
          </ul>
        </div>

        <div className="container-right">
          <div className="text">
            <h2>Cutting Carbs… Into Triangles.</h2>
            <h3>Round, hot, irresistible, and always ready for another date night.</h3>
          </div>
          <p>
            Let’s be honest: nobody ever craved a salad at 9:00 PM on a Tuesday. At Mario Pizza, we believe that life is too short for mediocre crusts and "functional" fuel. 
            We treat every dough ball like a high-stakes science experiment, where the only acceptable outcome is a perfect, leopard-spotted char and a cheese pull that defies the laws of physics. 
            Our secret isn't just the imported flour or the tomatoes that sat in the Italian sun a little longer than the rest; it’s the fact that we refuse to take ourselves too seriously, even if we take our toppings very, very seriously.
          </p>
          <div className="btn-container">
            <button type="button" className="my-button-first" style={{margin: "0"}}>READ MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
};
