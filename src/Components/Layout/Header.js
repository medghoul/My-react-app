import React from 'react';
import SquareLogo from '../images/The Square Logo.png';
import Thesquareimg from '../images/The Square.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <img className={classes['logo-image']} src={SquareLogo} />
        <h2 className={classes['text-align']}>The Square</h2>
        <HeaderCartButton onClick={props.onshow}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={Thesquareimg} alt="Cosa desideri ordinare ?" />
      </div>
    </React.Fragment>
  );
};
export default Header;
