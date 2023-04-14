import React from 'react'
import picture from './images/coming.webp'

function Coming() {
  return (
    <div className='card' id='coming'>
        <div className="card-image"><img src={picture} alt="Hangman" /></div>
        
        <div className="card-text">
        
            <h2 className="heading">
                NEW GAME
                
            </h2>
        </div>
        <button className='button'>soon</button>
    </div>
  )
}

export default Coming