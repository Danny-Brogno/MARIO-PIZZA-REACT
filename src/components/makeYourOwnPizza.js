import React, { useState } from 'react';
import { useNav } from '../context/NavContext.js';

import makeYourOwnPizza from '../img/14.jpg';

export const MakeYourOwnPizza = () => {
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
    { name: "Prosciutto Cotto", price: 4 },
    { name: "Fresh rocket", price: 2 },
    { name: "Pepperoni", price: 3 },
    { name: "Yellow cherry tomatoes", price: 2 },
    { name: "Porcini mushrooms", price: 5 },
    { name: "Button mushrooms", price: 3 },
    { name: "Black olives", price: 2 },
    { name: "Green olives", price: 2 },
    { name: "French fries", price: 2 },
    { name: "Artichokes", price: 3 },
    { name: "Frankfurter", price: 3 }
  ];
  
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
  
  // 1. Calculate the cost of the ingredients alone
  const toppingsTotal = selected.reduce((acc, curr) => acc + curr.price, 0);

  // 2. Determine if the £5 base price applies (Free if toppings are £10 or more)
  const basePrice = toppingsTotal >= 10 ? 0 : 5;

  // 3. Final Pizza Price calculation
  const pizzaPrice = toppingsTotal + basePrice;

  // 4. Calculate the subtotal of items already sitting in the cart
  const existingCartSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // 5. Double-check the cumulative global total for delivery logic
  const combinedTotal = existingCartSubtotal + pizzaPrice;
  const overlayDeliveryFee = combinedTotal >= 10 ? 0 : 5;
  const overlayGrandTotal = pizzaPrice + overlayDeliveryFee;

  const handleGoToCart = () => {
    // BUG FIX: Prevent adding to cart if no ingredients are chosen
    if (selected.length === 0) {
      alert("Please select at least 1 ingredient to customise your pizza!");
      return;
    }

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
        <h3 className="make-your-own-pizza-title"> MAKE YOUR OWN PIZZA!</h3>
        <h5>Selected: {selected.length} / 5</h5>

        <h3 className="promos-and-infos-1">
          <i className="fa-solid fa-truck"></i>
          &nbsp;
          <span>Spend £10 or more total for FREE delivery!</span>
          &nbsp;
          <i className="fa-solid fa-truck"></i>
        </h3>
        
        <h3 className="promos-and-infos-2">
          <i className="fa-solid fa-star"></i>
          &nbsp;
          <span>BONUS: Spend £10 or more ON TOPPINGS and the £5 pizza base becomes completely FREE!</span>
          &nbsp;
          <i className="fa-solid fa-star"></i>
        </h3>
        
        <div className="inside-container">
          <ul>
            {ingredients.map((ing, index) => (
              <li 
                key={index} 
                onClick={() => toggleIngredient(ing)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: selected.some(s => s.name === ing.name) ? 'var(--pizza-green)' : 'var(--pizza-dark)',
                  fontWeight: selected.some(s => s.name === ing.name) ? 'bold' : 'normal',
                  margin: '5px 0',
                  cursor: 'pointer'
                }}
              >
                <span>
                  {selected.some(s => s.name === ing.name) ? '✅ ' : '⬜ '}
                  {ing.name}
                </span>
                <span>£{ing.price}</span>
              </li>
            ))}
          </ul>

          <div className="image-wrapper">
            <img src={makeYourOwnPizza} alt="pizza"/>
            
            {showSummary && (
              <div className="summary-overlay">
                <div className="summary-content">
                  <h4>YOUR SELECTION</h4>
                  <hr />
                  
                  {/* DYNAMIC PIZZA BASE ROW */}
                  <div className="summary-line">
                    <span>Pizza base</span>
                    {basePrice === 0 ? (
                      <span className="free-message">FREE</span>
                    ) : (
                      <span>£5</span>
                    )}
                  </div>
                  
                  {selected.map((s, i) => (
                    <div key={i} className="summary-line">
                      <span>{s.name}</span>
                      <span>£{s.price}</span>
                    </div>
                  ))}
                  
                  <div className="summary-line">
                    <span>Delivery Fee</span>
                    {overlayDeliveryFee === 0 ? (
                      <span className="free-message">FREE</span>
                    ) : (
                      <span className="charge-message">+£5</span>
                    )}
                  </div>
                  
                  <hr />
                  <div className="summary-total">
                    <strong>TOTAL</strong>
                    <strong>£{overlayGrandTotal}</strong>
                  </div>
                  
                  {/* The checkout button will also inherit the disabled rule just in case */}
                  <button 
                    className="checkout-btn" 
                    onClick={handleGoToCart}
                    disabled={selected.length === 0}
                  >
                    GO TO CART
                  </button>
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
          style={{
            opacity: selected.length === 0 ? 0.5 : 1,
            cursor: selected.length === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Select ingredients
        </button>
      </div>
    </section>
  );
};