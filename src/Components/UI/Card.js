import { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import ItemForm from './ItemForm';
import classes from './Card.module.css';

const Card = (props) => {
  const Cartctx = useContext(CartContext);
  const price = '€' + props.price.toFixed(2);
  const addToCartHandler = (amount) => {
    Cartctx.AddItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.box}>
          <img className="card-img-top" src={props.src} />
          <div>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.description}</p>
            <h3>{price}</h3>
            <ItemForm onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
