import React, { useState, useEffect } from 'react';

// ==========================================
// THE BLUEPRINT (CLASS DEFINITION)
// ==========================================
class Relationship {
  static classVariable = "I am a class variable under class Relationship";
  
  constructor(respectLevel, communicationStatus) {
    this.respectLevel = respectLevel;
    this.communicationStatus = communicationStatus;
  }

  instanceMethod() {
    return `I am an instance method. My values are: ${this.respectLevel} and ${this.communicationStatus}`;
  }
}

// ==========================================
// THE COMPONENT (UI & STATE)
// ==========================================

export function RelationshipComponent() {
  
  // REACT STATE (Attributes that change the screen)
  const [respect, setRespect] = useState("high");
  const [communication, setCommunication] = useState("honest");

  // THE ACTION (Logs)
  // useEffect with [] ensures this runs ONLY ONCE when you open the page.
  useEffect(() => {
    const couple1 = new Relationship("high", "honest");
    const couple2 = new Relationship("medium", "deceptive");

    console.log("--- Couple 1 ---");
    console.log(couple1.respectLevel, couple1.communicationStatus); 
    console.log(couple1.instanceMethod());
    console.log(Relationship.classVariable); 

    console.log("\n--- Couple 2 ---");
    console.log(couple2.respectLevel, couple2.communicationStatus);
    console.log(couple2.instanceMethod());
  }, []); // The empty brackets [] stop the double/infinite logs.

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h1>Relationship Status</h1>
      <p><strong>Level:</strong> {respect}</p>
      <p><strong>Style:</strong> {communication}</p>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Check Status */}
        <button onClick={() => alert(`Status is ${respect}`)}>
          Check Status
        </button>

        {/* Update State */}
        <button onClick={() => setRespect("Low (Needs work)")}>
          Lower Respect
        </button>

        <button onClick={() => setCommunication("Deceptive/Silent")}>
          Break Communication
        </button>
      </div>
    </div>
  );
}