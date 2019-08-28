import React from 'react';
import file from '../assets/images/file.png';
import folder from '../assets/images/folder.png';
import unknownfiletype from '../assets/images/unknownfiletype.png';

const Thumbnail = (props) => {
  const image = props.fileName === "" ? unknownfiletype :
    props.fileType !== "folder" ? file : folder;
  return (
    <div className="disp-inline p10 thumbnail-box">
      <div className="thumbnail-parent">
        <img src={image} alt={props.fileName} />
        <div className="thumbnail-child">{props.fileType}</div>
      </div>
      <div>{props.fileName}.{props.fileType}</div>
    </div>);
}

export default Thumbnail;
