import React from 'react';
import reviewsImage from '../img/reviews.png';


export const JumbotronStaticImage = () => {
  return (
    <div className="jumbotron-static-image">
      <section>
        
        <div className="container-left">
          <img src={reviewsImage} alt="image-here" />
        </div>
        
        <div className="container-right">
          
          <div className="text">
            <h2>
              Try our delicious pizza!
            </h2>
            
            <h3>
              Money back guarantee If you have the courage to give it back without eating it
            </h3>
            
          </div>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
          </p>
          
          <div className="btn-container">
            <a href="#">
              READ MORE
            </a>
          </div>
          
          
        </div>
        
      </section>
    </div>
  )
}