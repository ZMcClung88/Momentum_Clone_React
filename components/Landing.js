import React from 'react';
import RandomQuote from './RandomQuote';
import GetNameGreet from './GetNameGreet';
import styles from '.././public/index.css';
import Weather from './Weather';
import Clock from 'react-live-clock';
// import utils from '.././utils/helpers'
// var randomQuote = utils.randomQuote
// var randomImage = utils.randomImage

let images = [
  { url: '/images/33963984465_6a9dcd84a3_k.jpg' },
  { url: '/images/ales-krivec-2892.jpg' },
  { url: '/images/jason-ortego-5386.jpg' },
  { url: '/images/jon-flobrant-32821.jpg' },
  { url: '/images/luca-zanon-26595.jpg' },
  { url: '/images/luis-poletti-17300.jpg' },
  { url: '/images/luke-pamer-7319.jpg' },
  { url: '/images/milos-simic-351441.jpg' },
  { url: '/images/regis-freyd-275512.jpg' },
  { url: '/images/robert-crawford-12905.jpg' },
  { url: '/images/sam-ferrara-270946.jpg' }
];

// console.log(images[Math.floor(Math.random() * images.length)].url);
var BgImage = {
  backgroundImage: 'url(' + images[Math.floor(Math.random() * images.length)].url + ')',
  height: '100%',
  width: '100%',
  backgroundSize: 'cover'
};

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-main" style={BgImage}>
        <Weather />
        <Clock format={'HH:mm'} className="clock" />
        <GetNameGreet />
        <RandomQuote className="quote-section" />
      </div>
    );
  }
}
export default Landing;
