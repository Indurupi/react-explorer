import React from 'react';
import file from '../assets/images/file.png';
import folder from '../assets/images/folder.png';
import unknownfiletype from '../assets/images/unknownfiletype.png';

const Thumbnail = (props) => {
  const image = props.file.type === "" ? unknownfiletype :
    props.file.type !== "folder" ? file : folder;
  return (
    <div className="p10 thumbnail-box">
      <div className="thumbnail-parent">
        <img src={image} alt={props.file.name} />
        <div className="thumbnail-child">.{props.file.type}</div>
      </div>
      <div>{props.file.name}.{props.file.type}</div>
    </div>);
}

export default Thumbnail;
