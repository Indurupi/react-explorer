import React from 'react';
import close from '../assets/images/close.png';

const Popup = (props) => {
  return(<div className="popup">
           <div className="disp-inline popup-heading">{props.name}</div>
           <div className="disp-inline popup-close">
             <img src={close} alt="close-icon" onClick={props.popUpChange(false)} />
           </div>
        <br />
    </div>);
}

export default Popup;
