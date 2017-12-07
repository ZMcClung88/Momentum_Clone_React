import React from 'react'
import Time from './Time'
import Quotes from './Quotes'
import Greeting from './Greeting'
import styles from '.././public/index.css'
import Weather from './Weather'

const Landing = () => {
  return (
    <div className='landing-main'>
      <Weather />
      <h1>Hello World</h1>
      <p>Welcome to my world</p>
      <Time />
      <Greeting />
      <Quotes />
    </div>
  )
}
export default Landing
