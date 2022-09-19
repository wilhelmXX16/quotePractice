import React from 'react'

const Button = ({randomColor,getRandomAll}) => {
    const backgroundColorObj = {
        backgroundColor: randomColor
      }
  return (
    <button 
    style={backgroundColorObj} 
    className='btn'
    onClick={getRandomAll}
    ><i className="fa-sharp fa-solid fa-arrow-rotate-right"></i></button>
  )
}

export default Button