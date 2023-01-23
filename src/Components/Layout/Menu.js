import Drinks from '../Meals/Drinks';
import { Fragment, useState } from 'react';
import React from 'react';
import Sushi from '../Meals/Sushi';
import Gelati from '../Meals/Gelati';
import MenuGranMattino from '../Meals/MenuGranMattino';
import './Menu.css';
const Menu = () => {
  const [sushiOpen, setSushiOpen] = useState(true);
  const [drinksOpen, setDrinksOpen] = useState(false);
  const [iceCreamOpen, setIceCreamOpen] = useState(false);
  const [menuGranMattino, setMenuGranMattino] = useState(false);
  const handleMenuGranMattino = () => {
    setSushiOpen(false);
    setIceCreamOpen(false);
    setDrinksOpen(false);
    setMenuGranMattino(true);
  };
  const handleDrinksOpen = () => {
    setSushiOpen(false);
    setIceCreamOpen(false);
    setMenuGranMattino(false);
    setDrinksOpen(true);
  };
  const handleIceCreamOpen = () => {
    setSushiOpen(false);
    setDrinksOpen(false);
    setMenuGranMattino(false);
    setIceCreamOpen(true);
  };
  const handleSushiClick = () => {
    setDrinksOpen(false);
    setIceCreamOpen(false);
    setMenuGranMattino(false);
    setSushiOpen(true);
  };
  return (
    <Fragment>
      <div className="left-half">
        <h1 className="h1">Our Menu</h1>
        <ul className="items">
          <li onClick={handleSushiClick} className="items-body-content">
            Sushi
          </li>
          <li onClick={handleDrinksOpen} className="items-body-content">
            Drinks
          </li>
          <li onClick={handleIceCreamOpen} className="items-body-content">
            Ice Cream
          </li>
          <li onClick={handleMenuGranMattino} className="items-body-content">
            Menu for breakfast
          </li>
        </ul>
      </div>
      <div className="right-half ">
        {sushiOpen && <Sushi />}
        {drinksOpen && <Drinks />}
        {iceCreamOpen && <Gelati />}
        {menuGranMattino && <MenuGranMattino />}
      </div>
    </Fragment>
  );
};
export default Menu;
