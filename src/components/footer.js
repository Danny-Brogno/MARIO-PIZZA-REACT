import React from 'react';

const scrollToTheTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

export const Footer = () => {
  return (
    <footer>
      <section className="top-footer">
        <div className="left">
          <div className="titles">
            <h2>CONTACT US</h2>
            <h3>SEND US A MESSAGE</h3>
          </div>
          <form className="form" action="/submit-form" method="post">
            <input type="text" id="fullname-form" name="firstName" placeholder="Princess Toadstool" required />
            <input type="email" id="email-form" name="email" placeholder="pizza@gmail.com" required />
            <textarea name="Text1" cols="40" rows="7" placeholder="How can I order more pizza?"></textarea>
            <div className="form-submit-container">
              <input type="submit" value="Submit" id="submit-form" />
            </div>
          </form>
        </div>

        <div className="middle">
          <div className="titles">
            <h2>SITEMAP</h2>
            <h3>ALL OUR PAGES</h3>
          </div>
          <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="about-us.html">ABOUT US</a></li>
            <li><a href="features.html">FEATURES</a></li>
            <li><a href="pricing.html">PRICING</a></li>
            <li><a href="contact-us.html">CONTACT US</a></li>
          </ul>
        </div>

        <div className="right">
          <div className="top">
            <section></section>
          </div>
          <div className="bottom">
            <div className="phone">
              <span><i className="fa-solid fa-phone"></i></span>
              <span><a href="tel:+390212345678">+39 02 12345678</a></span>
            </div>
            <div className="email">
              <span><i className="fa-solid fa-envelope"></i></span>
              <span><a href="mailto:fake.email@fakeemail.com">fake.email@fakeemail.com</a></span>
            </div>
          </div>
        </div>
      </section>

      <section className="under-footer">
        <p>COPYRIGHT 2001. ALL RIGHTS RESERVED "MARIO PIZZA"</p>
        <div className="scroll-top-btn" onClick={scrollToTheTop}>
          <ul>
            <li><i className="fas fa-chevron-up"></i></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};