import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className="n-wrapper" id='navbar'>
        <div className="n-left">
            <div className="n-name">Portfolio</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} smooth={true} to='Navbar'>
                      <li className='li-item'>Home</li>
                    </Link>
                    <Link spy={true} smooth={true} to='skills' offset={-50}>
                       <li className='li-item'>Skills</li>
                    </Link>
                    <Link spy={true} smooth={true} to='project'>
                       <li className='li-item'>Projects</li>
                    </Link>
                    <Link spy={true} smooth={true} to='experience'>
                       <li className='li-item'>Experience</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} smooth={true} to='contact' offset={-100}>
               <button className="btn n-btn">Contact Me</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar