import React from 'react';
import Quotes from './Quotes';
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
      <h1>Hello World</h1>
      <p>Welcome to my world</p>
      <Clock format={'HH:mm A'} />
      <Greeting />
      <Quotes />
    </div>
  );
};
export default Landing;
