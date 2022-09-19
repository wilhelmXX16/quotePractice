import React from 'react'
import Button from './Button'

const QuoteBox = ({randomQuote,randomColor,getRandomAll}) => {

const colorObj = {
  color: randomColor
}


  return (
    <article style={colorObj} className='card_box'>
      <div className="quote">
        <i className="fa-solid fa-quote-left"></i>
        <p className='card__quote'>{randomQuote.quote}</p>
      </div>
      <h4 className='card__author'>{randomQuote.author}</h4>
      <Button 
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    </article>
  )
}

export default QuoteBox