import React from 'react'
// import './hangman.css'
import picture from './images/tic-tac-toe.jpg'
import icon from './images/king.png'
function Hangman() {
  const handlePlayClick = () => {
    window.open('bangtan-hangman.web.app', '_blank', 'noopener,noreferrer'); // Replace 'https://example.com' with the URL you want to open in a new page
  }

  return (
    <div className='card' id='hangman'>
        <div className="card-image"><img src={picture} alt="Hangman" /></div>
        
        <div className="card-text">
        <div className="new"><img className='icon' src={icon} alt="icon" />new</div>
            <h2 className="heading">
                HANGMAN
            </h2>
        </div>
        <button className='button' onClick={handlePlayClick}>PLAY</button>
    </div>
  )
}

export default Hangman