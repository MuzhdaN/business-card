import React from 'react';
import icon from '../images/logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Info() {
    return(
        <div className='info-section'>
            <img src={icon} />
            <h2 className='name'>Laura Smith</h2>
            <p className='occupation'>Frontend Developer</p>
            <small className='email-add'>laurasmith.website</small>
            <div className='email-btn'>
            <a href="mailto:muzhda.noorzad4@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> Email </a>
            </div>
        </div>

    );
}