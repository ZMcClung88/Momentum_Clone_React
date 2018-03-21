import React from 'react';
import RandomQuote from './RandomQuote';
import Greeting from './Greeting';
import styles from '.././public/index.css';
import Weather from './Weather';
import Clock from 'react-live-clock';
// import utils from '.././utils/helpers'
// var randomQuote = utils.randomQuote
// var randomImage = utils.randomImage

const RandomImage = () => {
  let images = [
    '33963984465_6a9dcd84a3_k.jpg',
    'ales-krivec-2892.jpg',
    'jason-ortego-5386.jpg',
    'jon-flobrant-32821.jpg',
    'luca-zanon-26595.jpg',
    'luis-poletti-17300.jpg',
    'luke-pamer-7319.jpg',
    'milos-simic-351441.jpg',
    'regis-freyd-275512.jpg',
    'robert-crawford-12905.jpg',
    'sam-ferrara-270946.jpg'
  ];
};

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-main">
        <Weather />
        <Clock format={'HH:mm A'} />
        <Greeting />
        <RandomQuote />
      </div>
    );
  }
}
export default Landing;
