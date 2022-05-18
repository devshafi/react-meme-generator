import Card from './components/Card';
import Navbar from './components/Navbar';
import cardData from './data';

export default function App() {
  const cards = cardData.map((item, i, arr) => {

    // determining if the current card is the 
    // last card or not
    const isLast = i === arr.length - 1 ? true : false;
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