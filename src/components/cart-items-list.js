import React from 'react';
import { useNav } from '../context/NavContext.js';

export const CartItemsList = ({ items }) => {
  // Pulled setCurrentPage from context to handle the navigation switch back
  const { setCartItems, setCurrentPage } = useNav();

  // Simple handler to eliminate an item entirely
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Simple subtotal accumulator logic
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Dynamic delivery price condition logic
  const deliveryFee = subtotal >= 10 ? 0 : 5;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="cart-populated row py-4">
      
      <div className="title-container">
        <h2>
          Your cart
        </h2>
      </div>
      
      <div className="parent-container">
        <div className="col-lg-7 left-container">
          {items.map((item) => (
            <div key={item.id} className="cart-item-card d-flex align-items-center justify-content-between p-3 mb-3 bg-light rounded-4 border">
              <div className="element-ordered d-flex align-items-center gap-3">
                
                <div className="image-container">
                  <img src={item.image} alt={item.name} className="rounded-3" />
                </div>
                
                <div className="name-and-price">
                  {/* The title attribute displays the native full text tooltip on mouse hover */}
                  <h4 className="m-0 fw-bold name-of-pizza" title={item.name}>
                    {item.name}
                  </h4>
                  
                  {/* Explicitly render selected ingredients if it's a unique custom build */}
                  {item.ingredientsList && item.ingredientsList.length > 0 && (
                    <p className="m-0 text-success">
                      {item.ingredientsList.join(', ')}
                    </p>
                  )}
                  
                  <p className="text-muted m-0">£{item.price} each</p>
                </div>
                
                <div className="d-flex align-items-center gap-4 quantity-container">
                  <span className="fw-bold">
                    Qty: {item.quantity} &rarr;
                  </span>
                  <span className="fw-bold text-success">
                    &nbsp;£{item.price * item.quantity}
                  </span>
                </div>
                
                <div className="button-container">
                  <button className="btn btn-sm btn-outline-danger my-button-cart" onClick={() => removeItem(item.id)}>
                    <i className="bi bi-trash">
                      Remove
                    </i>
                  </button>
                </div>
                
              </div>
              
            </div>
          ))}
        </div>

        {/* Side Summary Block matching your UI boxes */}
        <div className="col-lg-5 right-container">
        <div className="order-summary-box p-4 bg-dark text-white rounded-4 shadow">
          <h3 className="fw-bold mb-3 border-bottom pb-2 text-warning">Order Summary</h3>
          <div className="subtotal d-flex justify-content-between mb-2">
            <span>Subtotal&nbsp;</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>
          
          {/* NEW: Modified delivery presentation wrapper row using dynamic variables */}
          <div className="delivery d-flex justify-content-between mb-4">
            <span>Delivery&nbsp;</span>
            {deliveryFee === 0 ? (
              <span className="text-success">FREE</span>
            ) : (
              <span className="text-danger">£{deliveryFee.toFixed(2)}</span>
            )}
          </div>

          {/* Linked calculated grand total output configuration */}
          <div className="total d-flex justify-content-between fw-bold fs-4 border-top pt-2 mb-4">
            <span>Total:&nbsp;</span>
            <span className="text-warning">£{grandTotal.toFixed(2)}</span>
          </div>
          
          <button className="my-button-cart btn btn-warning w-100 py-3 mb-3 fw-bold tracking-wide text-uppercase width100 height3rem">
            Proceed To Checkout
          </button>

          {/* CONTINUE ORDERING BUTTON BACK TO ORDER ONLINE */}
          <button 
            className="my-button-cart btn btn-outline-light w-100 py-2 fw-bold text-uppercase width100 height3rem"
            onClick={() => setCurrentPage("orderOnline")}
          >
            Continue Ordering
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};