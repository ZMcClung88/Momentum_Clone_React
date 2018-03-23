import React from 'react';

let allQuotes = [
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

function MixUp() {
  // console.log('mixUp', allQuotes);
  let r = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  // console.log(r.author);

  return (
    <h1 className="quote-section">
      <p id="quote">
        "{r.quote}"
      </p>
      <p id="author">
        -{r.author}
      </p>
    </h1>
  );
}

class RandomQuote extends React.Component {
  render() {
    return (
      <section>
        <MixUp />
      </section>
    );
  }
}

export default RandomQuote;
