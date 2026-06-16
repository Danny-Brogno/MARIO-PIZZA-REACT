import React from 'react';

export const ContactForm = () => {
  return (
    <div className="container-form">
    
      <div className="title">
        <h1>CRAVING A SLICE?</h1>
      </div>
      
      <div className="flex justify-space-between">
        
        <div className="left-content">
          
          <div className="phone">
            <p>
              Call us on our landline:
            </p>

            <a href="tel:+390984439052">
              <span>
                <i className="fa-solid fa-phone trin-trin"></i>
              </span>
                
              <span>
                +39 0984 439052
              </span>
            </a>
            
          </div>
          
          <div className="whatsapp">
            <p>
              Text us on WhatsApp:
            </p>
            
            <a href="https://wa.me/4407849619289" target="_blank" rel="noreferrer">
              <span>
                <i className="fa-brands fa-whatsapp"></i>
              </span>

              <span>
                +44 784 9619 283
              </span>
            </a>
          </div>
          
          <div className="email">
            <p>
              Email us at the following email address:
            </p>

            <a href="mailto:danny.brogno@gmail.com" className="scrolling-text">
              <span>
                <i className="fa-solid fa-at"></i>
              </span>
              
              <span>
                danny.brogno@gmail.com
              </span>
            </a>
          </div>
        </div>
        
        <div className="middle-content">
          <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
            </div>
          </div>
          
          <div className="screen-body">
          <div className="screen-body-item left">
          <div className="app-title">
          <span>CONTACT US</span>
          </div>
          </div>
          <div className="screen-body-item">
          <div className="app-form">
          <div className="app-form-group">
          <input className="app-form-control" placeholder="NAME" defaultValue="" />
          </div>
          <div className="app-form-group">
          <input className="app-form-control" placeholder="EMAIL" />
          </div>
          <div className="app-form-group">
          <input className="app-form-control" placeholder="CONTACT NO" />
          </div>
          <div className="app-form-group message">
          <input className="app-form-control" placeholder="MESSAGE" />
          </div>
          <div className="app-form-group buttons">
          <button className="app-form-button">SEND</button>
          </div>
          </div>
          </div>
          </div>
          
          </div>
        </div>
        
        <div className="right-content">
          <div>
            <p>
              Store opening hours:
            </p>
            <ul>
              <li>
                Monday: 11:00 to 23:00
              </li>
              <li>
                Tuesday: 11:00 to 23:00
              </li>
              <li>
                Wednesday: Closed
              </li>
              <li>
                Thursday: 11:00 to 23:00
              </li>
              <li>
                Friday: 11:00 to 23:00
              </li>
              <li>
                Saturday: 11:00 to 23:00
              </li>
              <li>
                Sunday: 11:00 to 23:00
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}