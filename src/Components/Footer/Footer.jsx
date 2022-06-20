import React from 'react';
import './Footer.css';
import wave from '../../img/wave.png';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

function Footer() {
  return (
    <div className="footer">
        <img src={wave} alt='img' style={{width: '100%'}} />
        <div className="f-content">
        <a href="mailto:aritrapani.97@gmail.com.com">
            <span>aritrapani.97@gmail.com</span>
        </a>
            <div className="f-icons">
              <a href='https://github.com/Aritrapani' target='_blank'>
               <Github color='white' size='3rem' />
               </a>
               <a href='https://www.linkedin.com/in/aritra-pani-913574219/' target='_blank'>
               <Linkedin color='white' size='3rem'/>
               </a>
            </div>
        </div>
    </div>
  )
}

export default Footer