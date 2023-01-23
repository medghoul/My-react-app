import { React, useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/CartContext';
const HeaderCartButton = (props) => {
  const [BumpBtn, SetBumpBtn] = useState(false);
  const cartctx = useContext(CartContext);
  const items = cartctx.Items;
  const NumArticle = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    SetBumpBtn(true);
    const Timer = setTimeout(() => {
      SetBumpBtn(false);
    }, 50);
    return () => {
      clearTimeout(Timer);
    };
  }, [items]);
  const classBtn = `${classes.button}  ${BumpBtn ? classes.bump : ''}`;
  return (
    <button className={classBtn} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{NumArticle}</span>
    </button>
  );
};
export default HeaderCartButton;
