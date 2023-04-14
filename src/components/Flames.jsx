import React from 'react'
// import './hangman.css'
import picture from './images/flames.jpg'
// import icon from './images/king.png'

function Flames() {
    const handlePlayClick = () => {
        window.open('https://bangtan-flames.web.app/', '_blank'); // Replace 'https://example.com' with the URL you want to open in a new page
      }
  return (
    <div className='card' id='flames'>
        <div className="card-image"><img src={picture} alt="Hangman" /></div>
        
        <div className="card-text">
        {/* <div className="new"><img className='icon' src={icon} alt="icon" />new</div> */}
            <h2 className="heading">
                FLAMES
            </h2>
        </div>
        <button className='button' onClick={handlePlayClick}>PLAY</button>
    </div>
  )
}

export default Flames