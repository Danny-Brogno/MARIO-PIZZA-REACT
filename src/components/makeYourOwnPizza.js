import React from 'react';
import makeYourOwnPizza from '../img/14.jpg';

export const MakeYourOwnPizza = () => {
  return (
    <section className="make-your-own-pizza">
      <div>
        <h3> MAKE YOUR OWN PIZZA!</h3>
        <h5>Choose up to 5 from this list of ingredients:</h5>
        <ul>
          <li>Italian sausages</li>

          <li>Turnip greens</li>

          <li>Mozzarella di bufala</li>

          <li>Burrata cheese</li>

          <li>Blue cheese</li>

          <li>Emmental</li>

          <li>Sundried tomatoes</li>

          <li>Bresaola in slices</li>

          <li>Prosciutto Crudo di Parma in slices</li>

          <li>Fresh rocket</li>

          <li>Pepperoni</li>

          <li>Yellow cherry moatoes</li>

          <li>Porcini mushrooms</li>

          <li>Champignon mushrooms</li>

          <li>Black olives</li>

          <li>Green olives</li>

          <li>Cooked ham in slices</li>

          <li>Artichokes</li>
        </ul> 
        <img src={makeYourOwnPizza} />
      </div>
    </section>
  )
}