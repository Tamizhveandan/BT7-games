import React from 'react'
import picture from './images/tic-tac-toe.jpg'
import icon from './images/king.png'
function Tictactoe() {
  const handlePlayClick = () => {
    window.open('https://bangtan-tic-tac-toe.web.app/', '_blank'); // Replace 'https://example.com' with the URL you want to open in a new page
  }
  return (
    <div className='card' id='tictactoe'>
        <div className="card-image"><img src={picture} alt="Hangman" /></div>
        
        <div className="card-text">
            <div className="new"><img className='icon' src={icon} alt="icon" />new</div>
            
            <h2 className="heading">
                TIC-TAC-TOE
            </h2>
        </div>
        <button className='button' onClick={handlePlayClick}>PLAY</button>
    </div>
  )
}

export default Tictactoe