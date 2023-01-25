import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
    return(
        <div className='footer'>
            <FontAwesomeIcon icon={faInstagramSquare} className='icons' />
            <FontAwesomeIcon icon={faFacebookSquare} className='icons' />
            <FontAwesomeIcon icon={faLinkedin} className='icons' />
            <FontAwesomeIcon icon={faGithubSquare} className='icons' />    
        </div>

    );
}