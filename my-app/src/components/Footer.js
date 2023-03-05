import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return(
        <div className='footer'>
            <a href='https://www.linkedin.com/in/muzhda-noorzad/'>
                <FontAwesomeIcon icon={faLinkedin} className='icons' /> 
            </a>

            <a href='https://github.com/MuzhdaN'>
                <FontAwesomeIcon icon={faGithubSquare} className='icons' /> 
            </a>        
        </div>
    );
}