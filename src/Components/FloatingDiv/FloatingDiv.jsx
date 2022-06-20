import React from 'react';
import './FloatingDiv.css';

function FloatingDiv({img , txt1, txt2}) {
  return (
    <div className="floatingDiv">
        <img src={img} alt='image' />
        <span>
            {txt1}
            <br />
            {txt2}  
        </span>

    </div>
  )
}

export default FloatingDiv