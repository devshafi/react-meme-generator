

import Card from './components/Card';
import Navbar from './components/Navbar';
import cardData from './data';

export default function App() {

  const cards = cardData.map((item, i, arr) => {
    const isLast = i === arr.length - 1 ? true : false;
    // console.log('isLast', isLast);
    return (
      <Card
        key={item.id}
        item={item}
        isLast={isLast}
      />
    )
  })

  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}