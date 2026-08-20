import React, { useEffect } from 'react';
import { useNav } from '../../context/NavContext.js';

// CSS
import '../../style-global.css';
import '../../style-summary.css';

// FAVICON
import faviconSummaryPage from '../../img/favicon-summary.png';

export const Summary = () => {
  const { cartItems, setCurrentPage } = useNav();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mario Pizza | Order Summary";
    
    // Set Favicon
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = faviconSummaryPage;
    }
  }, []);

  // Calculate totals matching CartItemsList logic
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 10 ? 0 : 5;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="summary-page">
      <header className="summary-header">
        <h1>Order Summary & Review</h1>
        <p>Please double-check your delicious selections before completing payment.</p>
      </header>

      <main className="summary-content">
        <section className="summary-items-list">
          <h2>Your Items ({cartItems.length})</h2>

          {cartItems.length === 0 ? (
            <div className="summary-empty-notice">
              <p>Your cart is empty.</p>
              <button type="button" onClick={() => setCurrentPage("orderOnline")}>
                Return to Menu
              </button>
            </div>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="summary-item">
                  <div className="summary-item-image">
                    {item.image && <img src={item.image} alt={item.name} />}
                  </div>

                  <div className="summary-item-details">
                    <h3>{item.name}</h3>
                    
                    {/* Render customized ingredients if present */}
                    {item.ingredientsList && item.ingredientsList.length > 0 && (
                      <p className="summary-item-ingredients">
                        Toppings: {item.ingredientsList.join(', ')}
                      </p>
                    )}

                    <span className="summary-item-unit-price">
                      £{item.price} each
                    </span>
                  </div>

                  <div className="summary-item-pricing">
                    <span className="summary-item-quantity">
                      Qty: {item.quantity}
                    </span>
                    <span className="summary-item-total-price">
                      £{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="summary-cost-breakdown">
          <h2>Payment Breakdown</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? "FREE" : `£${deliveryFee.toFixed(2)}`}</span>
          </div>

          <div className="summary-row summary-grand-total">
            <span>Total Amount Due</span>
            <span>£{grandTotal.toFixed(2)}</span>
          </div>
        </section>

        <nav className="summary-actions">
          <button 
            type="button" 
            className="btn-back-to-cart"
            onClick={() => setCurrentPage("cart")}
          >
            &larr; Back to Cart / Modify Items
          </button>

          {cartItems.length > 0 && (
            <button 
              type="button" 
              className="btn-proceed-to-payment"
              onClick={() => setCurrentPage("checkout")}
            >
              Proceed to Payment &rarr;
            </button>
          )}
        </nav>
      </main>
    </div>
  );
};