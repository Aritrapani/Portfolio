import React from 'react';
import './Toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import {useContext} from 'react';
import { ThemeContext } from '../../Context';

function Toggle() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({type: 'toggle'});
  }

  return (
    <div className="toggle" onClick={handleClick}>
        <Sun />
        <Moon />
        <div className="t-btn"
          style={ darkMode ? {left: '2px'} : {right:'2px'} }
        >

        </div>
    </div>
  )
}

export default Toggle