import { useContext, useState } from 'react';
import CartContext from '../../Store/CartContext.js';
import Modal from '../UI/Modal.js';
import classes from './Cart.module.css';
import CartItem from './CartItem.js';
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const addCartItemHandler = (item) => {
    cartctx.AddOneItem(item);
  };
  const removeCartItemHandler = (id) => {
    cartctx.RemoveItem(id);
  };
  const totalamount = `€${cartctx.TotalAmount.toFixed(2)}`;
  const hasItems = cartctx.Items.length > 0;
  const CartItems = (
    <ul className={classes['cart-items']}>
      {cartctx.Items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price.toFixed(2)}
          amount={item.amount}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onhide}>
      <h3>Cart</h3>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onhide}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
