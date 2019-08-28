import React from 'react';
import subfolders from '../assets/jsondata/subfolder.js';
import Thumbnail from './thumbnail.js';

const DisplayComponent = (props) => {
  const subfoldersId = props.subfoldersId;
  if(subfoldersId.length > 0) {
    return(<div>
      {subfoldersId.map((id) =><Thumbnail key={id} fileName={subfolders[id].name} fileType={subfolders[id].type} />)}
    </div>);
  } else {
    return(<div>"Folder is EMPTY"</div>);
  }
}


export default DisplayComponent;
