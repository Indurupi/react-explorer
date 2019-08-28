import React from 'react';
import subfolders from '../assets/jsondata/subfolder.js';

const DisplayComponent = (props) => {
  const subfoldersId = props.subfoldersId;
  if(subfoldersId.length > 0) {
    return(<div>
      {subfoldersId.map((id) =><div>{subfolders[id].name}.{subfolders[id].type}</div>)}
    </div>);
  } else {
    return(<div>"Folder is EMPTY"</div>);
  }
}


export default DisplayComponent;