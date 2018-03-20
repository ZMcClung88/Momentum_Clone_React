import React from 'react';
import RandomQuote from './RandomQuote';
import Greeting from './Greeting';
import styles from '.././public/index.css';
import Weather from './Weather';
import Clock from 'react-live-clock';
// import utils from '.././utils/helpers'
// var randomQuote = utils.randomQuote
// var randomImage = utils.randomImage

const Landing = () => {
  return (
    <div className="landing-main">
      <Weather />
      <Clock format={'HH:mm A'} />
      <Greeting />
      <RandomQuote />
    </div>
  );
};
export default Landing;
