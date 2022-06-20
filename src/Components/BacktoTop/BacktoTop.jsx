import React from 'react';
import './BacktoTop.css';
import Uparrow from '@iconscout/react-unicons/icons/uil-arrow-up';
import {Link} from 'react-scroll';

function BacktoTop({darkMode}) {
  return (
    <div className='arrow'>
        <Link spy={true} smooth={true} to='navbar' offset={0}>
           <Uparrow size='4rem' color={darkMode ? 'var(--orange)' : 'var(--black)'} className='icon' />
        </Link>
    </div>
  )
}

export default BacktoTop