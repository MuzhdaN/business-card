import React from 'react';
import icon from '../images/logo192.png';

export default function Info() {
    return(
        <div className='info-section'>
            <img src={icon} />
            <h2 className='name'>Laura Smith</h2>
            <p className='occupation'>Frontend Developer</p>
            <small className='email-add'>laurasmith.website</small>
            <button className='email-btn'> Email </button>
        </div>

    );
}