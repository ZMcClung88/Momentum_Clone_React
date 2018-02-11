import React from 'react'

import utils from '.././utils/helpers'

var randomQuote = utils.randomQuote()

const Quotes = () => {
  return (
    <div className='quotes-main'>
      <p> { randomQuote } </p>
    </div>
  )
}
export default Quotes
