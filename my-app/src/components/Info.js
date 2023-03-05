import React from 'react';
import icon from '../images/pic2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Info() {
    return(
        <div className='info-section'>
            <img src={icon} alt='icon' />
            <h2 className='name'>Muzhda Noorzad</h2>
            <p className='occupation'>Frontend Developer</p>
            <small className='email-add'>email@gmail.com</small>
            <div className='email-btn'>
            <a href="mailto:email@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> Email </a>
            </div>
        </div>

    );
}