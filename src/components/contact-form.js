import React from 'react';

export const ContactForm = () => {
  return (
    <div className="background-container-form">
    <h1>CONTACT US</h1>
        <div className="content">
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
                    <input className="app-form-control" placeholder="NAME" value="" />
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
      </div>
  )
}