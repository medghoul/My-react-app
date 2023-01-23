import california from '../images/imgSushi/california.png';
import dragon from '../images/imgSushi/dragon.png';
import dynamite from '../images/imgSushi/dynamite.png';
import philadelphia from '../images/imgSushi/philadelphia.png';
import shrimp from '../images/imgSushi/shrimp.png';
import Card from '../UI/Card';
const Sushi = () => {
  const DUMMY_Sushi = [
    {
      id: 'S1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      src: california,
    },
    {
      id: 'S2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      src: dragon,
    },
    {
      id: 'S3',
      name: 'Barbecue ',
      description: 'American, raw, meaty',
      price: 12.99,
      src: philadelphia,
    },
    {
      id: 'S4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      src: dynamite,
    },
    {
      id: 'S5',
      name: 'Burger',
      description: 'Healthy...',
      price: 18.99,
      src: shrimp,
    },
  ];
  const ListofMeals = DUMMY_Sushi.map((meal) => (
    <Card
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      src={meal.src}
    />
  ));
  return (
    <div>
      <ul className="row">{ListofMeals}</ul>
    </div>
  );
};
export default Sushi;
