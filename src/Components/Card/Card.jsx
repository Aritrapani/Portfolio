import React from 'react';
import './Card.css';

function Card({emoji , primaryText , secondaryText , darkMode}) {
  return ( 
    <div className='card' style={{background : darkMode ? 'white' : ''}}>
        <img src={emoji} alt='emoji' />
        <span style={{color : darkMode ? 'var(--black)' : ''}}>{primaryText}</span>
        <span>{secondaryText}</span>
    </div>
  )
}

export default Card