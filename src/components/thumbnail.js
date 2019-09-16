import React, { Component } from 'react';
import file from '../assets/images/file.png';
import folder from '../assets/images/folder.png';
import unknownfiletype from '../assets/images/unknownfiletype.png';
import Popup from './popup.js';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: false
    }
  }
  popUpChange(status) {
    this.setState({ popUp: status });
  }
  render() {
    const image = this.props.file.type === "" ? unknownfiletype :
      this.props.file.type !== "folder" ? file : folder;

    return (<div>
    <div className="p10 thumbnail-box" onClick={() => {
        // e.preventDefault();
        this.popUpChange(true);
      }}>
      <div className="thumbnail-parent">
        <img src={image} alt={this.props.file.name} />
        <div className="thumbnail-child">.{this.props.file.type}</div>
      </div>
      <div>{this.props.file.name}.{this.props.file.type}</div>

    </div>{this.state.popUp ?
      <Popup name={this.props.file.name}
        popUpChange={this.popUpChange}
        /> : null}
    </div>);
  }
}

export default Thumbnail;
