import React, { useEffect, useState } from 'react';
import { useNav } from '../../context/NavContext.js';

// CSS
import '../../style-global.css';
import '../../style-summary-payment.css';

export const Payment = () => {
  const { cartItems, setCurrentPage, setCartItems } = useNav();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mario Pizza | Payment";
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // UX & Popup States
  const [isProcessing, setIsProcessing] = useState(false);
  const [popupStatus, setPopupStatus] = useState(null); // 'success' | 'failed' | null

  // Cart Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 10 ? 0 : 5;
  const grandTotal = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mock Payment Processor (Simulating API Delay & Response)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Sanitize card input space characters
    const cleanCardNumber = formData.cardNumber.replace(/\s+/g, '');

    // Simulate network delay (1.5 seconds)
    setTimeout(() => {
      setIsProcessing(false);

      // MOCK GATEWAY RULES:
      // If card ends with '0002' or CVV is '000', fail the order.
      if (cleanCardNumber.endsWith('0002') || formData.cvv === '000') {
        setPopupStatus('failed');
      } else {
        setPopupStatus('success');
      }
    }, 1500);
  };

  const handleSuccessClose = () => {
    setPopupStatus(null);
    if (setCartItems) setCartItems([]);
    setCurrentPage('homepage');
  };

  return (
    <div className="payment-page">
      {/* 1. Back to Summary Button */}
      <button 
        type="button" 
        className="btn-back-to-summary"
        onClick={() => setCurrentPage("summary")}
      >
        &larr; Back to Summary
      </button>

      <h1>Payment</h1>
      <p>Total to pay: <strong>£{grandTotal.toFixed(2)}</strong></p>

      {/* Developer helper box for testing */}
      <div className="sandbox-info-box" style={{ background: '#f0f4f8', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
        <small>
          <strong>🧪 Sandbox Mode Instructions:</strong><br />
          • Use card ending in <code>4242</code> for <strong>SUCCESS</strong>.<br />
          • Use card ending in <code>0002</code> or CVV <code>000</code> for <strong>DECLINED</strong>.
        </small>
      </div>

      <h2>Pay by Card</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardholderName">Name on Card</label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="4242 4242 4242 4242"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            maxLength="4"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Confirm Payment"}
        </button>
      </form>

      {/* 2. SUCCESS POPUP */}
      {popupStatus === 'success' && (
        <div className="modal-overlay">
          <div className="modal-card modal-success">
            <h3>🎉 Payment Successful!</h3>
            <p>Your order for <strong>£{grandTotal.toFixed(2)}</strong> has been placed.</p>
            <p>Mario is preparing your delicious pizza right now!</p>
            <button type="button" onClick={handleSuccessClose}>
              Return to Homepage
            </button>
          </div>
        </div>
      )}

      {/* 3. FAILURE POPUP */}
      {popupStatus === 'failed' && (
        <div className="modal-overlay">
          <div className="modal-card modal-error">
            <h3>⚠️ Payment Failed</h3>
            <p>Your transaction was declined. Please check your card details or try a different card.</p>
            <button type="button" onClick={() => setPopupStatus(null)}>
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};