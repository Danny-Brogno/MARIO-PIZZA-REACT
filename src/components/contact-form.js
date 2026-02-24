import React from 'react';

export const ContactForm = () => {
  return (
    <div className="container-form">
    
      <div className="title">
        <h1>CRAVING A SLICE?</h1>
      </div>
      
      <div className="flex justify-space-between">
        
        <div className="left-content">
          Place your Clickable Phone and Email here. This is crucial for mobile users who want to order now.
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
          Operating Hours (Right): A simple, clean list. Consistency is key for hungry customers.
        </div>
        
      </div>
    </div>
  )
}