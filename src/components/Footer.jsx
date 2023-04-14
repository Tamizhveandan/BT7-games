import React from 'react'

import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer'>
        <div className="socialmedia">
            <h4>follow me on:</h4>
            <a href=' https://www.facebook.com/profile.php?id=100009127902009' target='__blank'><FontAwesomeIcon icon={faFacebook} className='fa facebook'/></a>
            <a href='https://github.com/tamizhveandan' target='__blank'><FontAwesomeIcon icon={faGithub} className='fa github' /></a>
            <a href='https://www.instagram.com/bangtantamizh007/' target='__blank'><FontAwesomeIcon icon={faInstagram} className='fa instagram' /></a>
            <a href='https://www.linkedin.com/in/tamizhveandan' target='__blank'><FontAwesomeIcon icon={faLinkedin} className='fa linkedin' /></a>
            
            
        
        </div>
        <div className="copyrights">
        Bangtan Games web application and all games within are created by Tamizh Veandan (BangtanTamizh007).  <FontAwesomeIcon icon={faCopyright} />2023 Bangtan Games. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer