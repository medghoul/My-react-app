import caffeamericano from '../images/imgGranMattino/caffeamericano.png.webp';
import caffeespresso from '../images/imgGranMattino/caffeespresso.png.webp';
import caffeorzo from '../images/imgGranMattino/caffeorzo.png.webp';
import ginseng from '../images/imgGranMattino/ginseng.png.webp';
import spremutaarancia from '../images/imgGranMattino/spremutaarancia.png.webp';
import succoananas from '../images/imgGranMattino/succoananas.png.webp';
import succopesca from '../images/imgGranMattino/succopesca.png.webp';
import croissantcrema from '../images/imgGranMattino/croissantcrema.png.webp';
import croissantmarmellata from '../images/imgGranMattino/croissantmarmellata.png.webp';
import croissantnutella from '../images/imgGranMattino/croissantnutella.png.webp';
import croissantvuoto from '../images/imgGranMattino/croissantvuoto.png.webp';
import Card from '../UI/Card';

const MenuGranMattino = () => {
  const Dummy_Menu = [
    {
      id: 'MGM1',
      name: 'Succo Arancia',
      price: 1.99,
      src: spremutaarancia,
    },
    {
      id: 'MGM2',
      name: 'Succo Pesca',
      price: 1.99,
      src: succopesca,
    },
    {
      id: 'MGM3',
      name: 'Succo Ananas',
      price: 1.99,
      src: succoananas,
    },
    {
      id: 'MGM4',
      name: 'Caffe Ginseng',
      price: 0.99,
      src: ginseng,
    },
    {
      id: 'MGM5',
      name: 'Caffe Espresso',
      price: 1.1,
      src: caffeespresso,
    },
    {
      id: 'MGM6',
      name: 'Caffe Orzo',
      price: 0.99,
      src: caffeorzo,
    },
    {
      id: 'MGM7',
      name: 'Caffe Americano',
      price: 1.2,
      src: caffeamericano,
    },

    {
      id: 'MGM8',
      name: 'Brioche Marmellata',
      price: 1.29,
      src: croissantmarmellata,
    },
    {
      id: 'MGM9',
      name: 'Brioche Nutella® ',
      price: 1.29,
      src: croissantnutella,
    },
    {
      id: 'MGM10',
      name: 'Brioche Crema',
      price: 1.29,
      src: croissantcrema,
    },
    {
      id: 'MGM11',
      name: 'Brioche Vuoto',
      price: 1.29,
      src: croissantvuoto,
    },
  ];
  const ListofMenu = Dummy_Menu.map((meal) => (
    <Card
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      src={meal.src}
    />
  ));
  return (
    <div>
      <ul className="row">{ListofMenu}</ul>
    </div>
  );
};
export default MenuGranMattino;
