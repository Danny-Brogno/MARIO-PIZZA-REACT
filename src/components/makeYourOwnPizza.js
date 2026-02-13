import React from 'react';
import makeYourOwnPizza from '../img/14.jpg';

export const MakeYourOwnPizza = () => {
  
  const ingredients = [
    "Italian sausages",
    "Turnip greens",
    "Mozzarella di bufala",
    "Burrata cheese",
    "Blue cheese",
    "Emmental",
    "Sundried tomatoes",
    "Bresaola in slices",
    "Prosciutto Crudo di Parma in slices",
    "Fresh rocket",
    "Pepperoni",
    "Yellow cherry tomatoes",
    "Porcini mushrooms",
    "Champignon mushrooms",
    "Black olives",
    "Green olives",
    "Cooked ham in slices",
    "Artichokes"
  ];
  
  return (
    <section className="make-your-own-pizza">
      <div className="outer-container">
        <h3> MAKE YOUR OWN PIZZA!</h3>
        <h5>Choose up to 5 from this list of ingredients:</h5>
        <div className="inside-container">
          <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
          </ul> 
          <img src={makeYourOwnPizza} alt="image-here"/>
        </div>
      </div>
    </section>
  )
}