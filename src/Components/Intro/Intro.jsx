import React, {useContext} from 'react';
import './Intro.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import aritra from '../../img/Aritra.jpg';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesemoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {Link} from 'react-scroll';
import { ThemeContext } from '../../Context';

function Intro() {
 
    const {state} = useContext(ThemeContext);

    return (
        <div className="intro" id='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{color : state.darkMode ? 'white' : ''}}>Hi! I Am</span>
                    <span>Aritra Pani</span>
                    <span>I'm a software developer with 1.5 years experience in Web development.
                        Having experince JavaScript , HTML , CSS , SCSS and React JS.
                        Currently, I'm working as a Specialist Programmer in INFOSYS.
                    </span>
                </div>
                <Link spy={true} smooth={true} to='contact' offset={-100}>
                    <button className="btn i-btn">Hire Me</button>
                </Link>
                <div className="i-icons">
                    <a href='https://github.com/Aritrapani' target='_blank'>
                        <img src={github} alt="github" />
                    </a>
                    <a href='https://www.linkedin.com/in/aritra-pani-913574219/' target='_blank'>
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt='vector1' />
                <img src={vector2} alt='vector2' />
                <img src={aritra} alt='aritra' />
                <img src={glassesemoji} alt='pic' />
                <div className='floatingDiv1' >
                    <FloatingDiv img={crown} txt1={'Frontend'} txt2={'Developer'} />
                </div>
                <div className='floatingDiv2'>
                    <FloatingDiv img={thumbup} txt1={'Data Structure'} txt2={'and Algorithm'}  />
                </div>
                <div className='blur1'></div>
                <div className="blur2"></div>
            </div>
        </div>
    )
}


export default Intro