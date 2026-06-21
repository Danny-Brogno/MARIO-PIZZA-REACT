import React, { useState } from 'react';
import { useNav } from '../context/NavContext.js';

import makeYourOwnPizza from '../img/14.jpg';

export const MakeYourOwnPizza = () => {
  // NEW: Added cartItems to our context properties destructured hook
  const { setCurrentPage, cartItems, setCartItems } = useNav();
  
  const ingredients = [
    { name: "Italian sausages", price: 2 },
    { name: "Turnip greens", price: 2 },
    { name: "Extra mozzarella", price: 3 },
    { name: "No tomato sauce", price: 0 },
    { name: "Mozzarella di bufala", price: 4 },
    { name: "Burrata cheese", price: 4 },
    { name: "Blue cheese", price: 4 },
    { name: "Emmental cheese", price: 4 },
    { name: "Sundried tomatoes", price: 2 },
    { name: "Bresaola", price: 4 },
    { name: "Prosciutto Crudo di Parma", price: 5 },
    { name: "Fresh rocket", price: 2 },
    { name: "Pepperoni", price: 3 },
    { name: "Yellow cherry tomatoes", price: 2 },
    { name: "Porcini mushrooms", price: 4 },
    { name: "Champignon mushrooms", price: 2 },
    { name: "Black olives", price: 2 },
    { name: "Green olives", price: 2 },
    { name: "Cooked ham", price: 3 },
    { name: "Artichokes", price: 3 }
  ];
  
  // USESTATE HOOK
  const [selected, setSelected] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  
  const toggleIngredient = (item) => {
    if (selected.some(i => i.name === item.name)) {
      setSelected(selected.filter(i => i.name !== item.name));
    } else {
      if (selected.length < 5) {
        setSelected([...selected, item]);
      } else {
        alert("Maximum 5 ingredients allowed!");
      }
    }
  };
  
  // 1. Calculate the current customized pizza price base (£5)
  const pizzaPrice = selected.reduce((acc, curr) => acc + curr.price, 5);

  // 2. NEW: Calculate the subtotal value of items ALREADY sitting in the cart
  const existingCartSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // 3. NEW: Double-check the cumulative global total (Cart + Current Custom Build)
  const combinedTotal = existingCartSubtotal + pizzaPrice;

  // 4. NEW: Compute overlay delivery status based on the combined basket health
  const overlayDeliveryFee = combinedTotal >= 10 ? 0 : 5;
  
  // 5. NEW: Grand total shown on overlay is the custom pizza price + the delivery fee (if any)
  const overlayGrandTotal = pizzaPrice + overlayDeliveryFee;

  // LOGIC TO SAVE THE SELECTION TO GLOBAL STATE
  const handleGoToCart = () => {
    const customPizzaItem = {
      id: `custom-${Date.now()}`,
      name: "Personalised pizza",
      price: pizzaPrice, 
      image: makeYourOwnPizza,
      quantity: 1,
      ingredientsList: selected.map(i => i.name)
    };

    setCartItems(prev => [...prev, customPizzaItem]);
    setCurrentPage("cart");
  };
  
  return (
    <section className="make-your-own-pizza">
      <div className="outer-container">
        <h3> MAKE YOUR OWN PIZZA!</h3>
        <h5>Selected: {selected.length} / 5</h5>

        {/* Funny but clear delivery fee condition notice header */}
        <h3 style={{ color: 'var(--pizza-red, #d62828)', textAlign: 'center', margin: '15px 0', fontWeight: 'bold' }}>
          🚚 Spend £10 or more for FREE delivery! Under £10? That'll be a £5 delivery fee, lazy bones! 😉
        </h3>
        
        <div className="inside-container">
          <ul style={{ listStyle: 'none', cursor: 'pointer' }}>
            {ingredients.map((ing, index) => (
              <li 
                key={index} 
                onClick={() => toggleIngredient(ing)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: selected.some(s => s.name === ing.name) ? 'var(--pizza-green)' : 'var(--pizza-dark)',
                  fontWeight: selected.some(s => s.name === ing.name) ? 'bold' : 'normal',
                  margin: '5px 0'
                }}
              >
                <span>
                  {selected.some(s => s.name === ing.name) ? '✅ ' : '⬜ '}
                  {ing.name}
                </span>
                
                <span>
                  £{ing.price}
                </span>
                
              </li>
            ))}
          </ul>

          <div className="image-wrapper" style={{ width: '70%', position: 'relative' }}>
            <img src={makeYourOwnPizza} alt="pizza" style={{ width: '100%', height: '100%' }} />
            
            {/* THE OVERLAY LAYER */}
            {showSummary && (
              <div className="summary-overlay">
                <div className="summary-content">
                  <h4>YOUR SELECTION</h4>
                  <hr />
                  
                  {/* STATIC BASE PRICE ROW */}
                  <div className="summary-line">
                    <span>Pizza base</span>
                    <span>£5</span>
                  </div>
                  
                  {/* DYNAMIC INGREDIENT ROWS */}
                  {selected.map((s, i) => (
                    <div key={i} className="summary-line">
                      <span>{s.name}</span>
                      <span>£{s.price}</span>
                    </div>
                  ))}
                  
                  {/* DYNAMIC GLOBAL SYSTEM DELIVERY FEE ROW */}
                  <div className="summary-line" style={{ fontStyle: 'italic' }}>
                    <span>Delivery Fee</span>
                    {overlayDeliveryFee === 0 ? (
                      <span style={{ color: 'green', fontWeight: 'bold' }}>FREE (Cart qualification)</span>
                    ) : (
                      <span style={{ color: '#d62828' }}>+£5</span>
                    )}
                  </div>
                  
                  <hr />
                  <div className="summary-total">
                    <strong>TOTAL</strong>
                    <strong>£{overlayGrandTotal}</strong>
                  </div>
                  {/* Applied global state logic handler here */}
                  <button className="checkout-btn" onClick={handleGoToCart}>GO TO CART</button>
                  <button onClick={() => setShowSummary(false)} className="close-btn">EDIT</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <button 
          type="button" 
          className="my-button-first"
          onClick={() => setShowSummary(true)}
          disabled={selected.length === 0}
        >
          Select ingredients
        </button>
      </div>
    </section>
  );
};