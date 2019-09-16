import React from 'react';
import subfolders from '../assets/jsondata/subfolder.js';
import Thumbnail from './thumbnail.js';

const DisplayComponent = (props) => {
  const subfoldersId = props.subfoldersId;
  if(subfoldersId.length > 0) {
    return(<div>
      {subfoldersId.map((id) =>
        <div key={id} className="disp-inline" id="subMenuArea">
          <Thumbnail file={subfolders[id]} />
        </div>)}
    </div>);
  } else {
    return(<div>"Folder is EMPTY"</div>);
  }
}


export default DisplayComponent;
