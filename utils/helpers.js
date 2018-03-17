let quotes = [
  { author: 'H. Jackson Brown, Jr.', quote: 'The best preparation for tomorrow is doing your best today.' },
  {
    author: 'Francis of Assisi',
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible."
  },
  { author: 'Norman Vincent Peale', quote: 'Change your thoughts and you change your world.' },
  { author: 'Aesop', quote: 'No act of kindness, no matter how small, is ever wasted.' },
  { author: 'Milton Berle', quote: "If opportunity doesnt't knock, build a door." },
  { author: 'Theodore Roosevelt', quote: "Belive you can and you're half way there." },
  {
    author: 'Democritus',
    quote: 'Happiness resides not in possessions, and not in gold, happiness dwells in the soul.'
  },
  { author: 'Tony Robbins', quote: 'We can change our lives. We can do, have, and be exactly what we wish.' },
  { author: 'Theodore Roethke', quote: 'What we need is more people who specialize in the impossible.' },
  { author: 'Wayne Gretzky', quote: 'You miss 100 percent of the shots you never take.' }
];

let backgroundImages = [
  '../public/images/ales-krivec-2892.jpg',
  '../public/images/jason-ortego-5386.jpg',
  '../public/images/jon-flobrant-32821.jpg',
  '../public/images/luca-zanon-26595.jpg',
  '../public/images/luis-poletti-17300.jpg',
  '../public/images/luke-pamer-7319.jpg',
  '../public/images/milos-simic-351441.jpg',
  '../public/images/regis-freyd-275512.jpg',
  '../public/images/robert-crawford-12905.jpg',
  '../public/images/sam-ferrara-270946.jpg',
  '../public/images/simon-matzinger-320332.jpg',
  '../public/images/topich-991.jpg'
];

// const randomQuote = (quotes) => {
//   console.log(quotes)
//   return "TEEEE"
//
// }

const randomBackgroundImage = () => {
  console.log('working!!!!!!');
};

module.exports.allQuotes = () => {
  return quotes;
};
