import React , {useContext} from 'react';
import './Skill.css';
import '../Intro/Intro.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../Card/Card';
import Aritra from './Aritra-Pani-Resume.pdf';
import { ThemeContext } from '../../Context';

function Skill() {

    const {state} = useContext(ThemeContext);

  return (
    <div className="skills" id='skills'>
        <div className="texts">
            <span style={{color : state.darkMode ? 'white' : ''}}>My</span>
            <span>Skills</span>
            <span>My main focus these days is redeveloping an existing application
                <br/>
                 from scratch comprising of reusable components using React JS and SCSS. </span>
                 <a href={Aritra} download>
                    <button className='btn s-btn'>Download Resume</button>
                 </a>
            <div className='blur1 s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card emoji={HeartEmoji} primaryText={'Frontend Skills'} 
                secondaryText={'JavaScript , React JS , HTML, CSS , SCSS , Angular , Bootstrap'} darkMode={state.darkMode}/>
            </div>
            <div style={{left: '-4rem' , top: '12rem'}}>
                <Card emoji={Glasses} primaryText={'Backend Skills'} 
                secondaryText={'Node JS , Express Js , MongoDB Database , Core java'} darkMode={state.darkMode}/>
            </div>
            <div style={{left: '12rem' , top:'19rem'}}>
                <Card emoji={humble} primaryText={'Data Structure and Algorithm'} 
                secondaryText={'3* in LeetCode'} darkMode={state.darkMode} />
            </div>
            <div className='blur1 s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Skill