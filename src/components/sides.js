import React from 'react';

export const Sides = () => {
  return (
    <div className="rainbow-demo">
      <div className="rainbow-text">
        <span style={{ "--d": "0s" }}>S</span>
        <span style={{ "--d": ".1s" }}>I</span>
        <span style={{ "--d": ".2s" }}>D</span>
        <span style={{ "--d": ".3s" }}>E</span>
        <span style={{ "--d": ".4s" }}>S</span>
      </div>
    </div>
  )
}