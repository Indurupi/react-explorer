import React from 'react';
import rootData from '../assets/jsondata/rootfolder.js';

const MenuComponent = (props) => {
  return (
    <div className="sidenav">
      {
        Object.keys(rootData).map(id => {
          return (
          <div key={id} className={`items ${props.displayId === id ? "menu-active" : ""}`}
            onClick={(e) => {
              props.changeId(id)
            }}>
            {rootData[id]["foldername"]}
          </div>)
        })
      }
    </div>
  );
}

export default MenuComponent;
