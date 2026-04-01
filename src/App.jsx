import React from 'react';
import Categories from './pages/categories/Categories';

const App = () => {
   const data = [
  {
    img: "https://pixelcalculator.com/image/img/vorschau.webp",
    text:'Men Clothes',
    undertext:'24 items'
  },
  {
    img:"https://pixelcalculator.com/image/img/vorschau.webp",
    text:"Women Clothes",
    undertext:"12 items"
  },
  {
    img:"https://pixelcalculator.com/image/img/vorschau.webp",
    text:"Accessories",
    undertext:"43 items"
  },
  {
    img:"https://pixelcalculator.com/image/img/vorschau.webp",
    text:"Cotton Clothes",
    undertext:"31 items"
  },
  {
    img:"https://pixelcalculator.com/image/img/vorschau.webp",
    text:"Summer Clothes",
    undertext:"26 items"
  },
  {
    img:"https://pixelcalculator.com/image/img/vorschau.webp",
    text:"Wedding Clothes",
    undertext:"52 items"
  },
  {
    img:"https://pixelcalculator.com/image/img/vorschau.webp",
    text:"Spring Collection",
    undertext:"24 items"
  },
  {
    img:"https://pixelcalculator.com/image/img/vorschau.webp",
    text:"Casual Clothes",
    undertext:"52 items"
  },
  {
    img:"https://pixelcalculator.com/image/img/vorschau.webp",
    text:"Hats",
    undertext:"26 items"
  },
];

  return (
    
    <div>
      <Categories data={data}/>
    </div>
  );
}

export default App;
