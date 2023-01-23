import cono from '../images/imgGelati/cono.png';
import milkshakebanana from '../images/imgGelati/milkshakebanana.png';
import milkshakefragola from '../images/imgGelati/milkshakefragola.png';
import milkshakevaniglia from '../images/imgGelati/milkshakevaniglia.png';
import sundaecaffe from '../images/imgGelati/sundaecaffe.png';
import sundaecaramello from '../images/imgGelati/sundaecaramello.png';
import Card from '../UI/Card';
const Gelati = () => {
  const Dummy_Gelati = [
    {
      id: 'G1',
      name: 'Cono',
      price: 1.49,
      src: cono,
    },
    {
      id: 'G2',
      name: 'Sundae Caffe',
      price: 2.99,
      src: sundaecaffe,
    },
    {
      id: 'G3',
      name: 'S. Caramello',
      price: 2.99,
      src: sundaecaramello,
    },
    {
      id: 'G4',
      name: 'Milkshake Banana',
      price: 0.99,
      src: milkshakebanana,
    },
    {
      id: 'G5',
      name: 'Milkshake Fragola',
      price: 0.99,
      src: milkshakefragola,
    },
    {
      id: 'G6',
      name: 'Milkshake Vaniglia',
      price: 0.99,
      src: milkshakevaniglia,
    },
  ];
  const ListofIceCreams = Dummy_Gelati.map((meal) => (
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
      <ul className="Row">{ListofIceCreams}</ul>
    </div>
  );
};
export default Gelati;
