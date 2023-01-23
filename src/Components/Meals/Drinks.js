import lipton from '../images/imgBevande/lipton.png';
import fanta from '../images/imgBevande/fanta.png';
import sprite from '../images/imgBevande/sprite.png';
import cocacola from '../images/imgBevande/coca-cola.png';
import liptonpeach from '../images/imgBevande/lipton-peach.png';
import cocazero from '../images/imgBevande/cocazero.png';
import Card from '../UI/Card';
const Drinks = () => {
  const Dummy_Drink = [
    {
      id: 'D1',
      name: 'Lipton Lemon Ice-tea®',
      price: 1.99,
      src: lipton,
    },
    {
      id: 'D2',
      name: 'Lipton® Peach Ice Tea',
      price: 1.99,
      src: liptonpeach,
    },
    {
      id: 'D3',
      name: 'Coca-Cola® Zero',
      price: 1.99,
      src: cocazero,
    },
    {
      id: 'D4',
      name: 'Coca-Cola®',
      price: 1.99,
      src: cocacola,
    },
    {
      id: 'D5',
      name: 'Fanta®',
      price: 1.99,
      src: fanta,
    },
    {
      id: 'D6',
      name: 'Sprite®',
      price: 1.99,
      src: sprite,
    },
  ];
  const ListofDrink = Dummy_Drink.map((meal) => (
    <Card
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      src={meal.src}
    />
  ));
  return (
    <section>
      <ul className="row">{ListofDrink}</ul>
    </section>
  );
};
export default Drinks;
