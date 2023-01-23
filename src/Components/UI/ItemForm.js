import { React, useRef, useState } from 'react';
import Input from './Input';
import classes from './ItemForm.module.css';
const ItemForm = (props) => {
  const [isValid, setisValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const entredAmount = amountInputRef.current.value;
    const entredAmountNumber = parseInt(entredAmount);
    if (
      entredAmount.trim().length === 0 ||
      entredAmountNumber > 5 ||
      entredAmountNumber < 1
    ) {
      setisValid(false);
      return;
    }
    props.onAddToCart(entredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'Amount',
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      {!isValid && <p>Please entred a valid amount (1-5).</p>}
      <button className={classes['.form button']}>Add</button>
    </form>
  );
};
export default ItemForm;
