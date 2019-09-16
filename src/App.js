import React from 'react';
import { Link } from '@reach/router';

import MenuComponent from './components/menucomponent.js';
import DisplayComponent from './components/displaycomponent.js';
import rootData from './assets/jsondata/rootfolder.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayId: "songs"
    };
  }
  changeIdfn(id) {
    this.setState({ displayId: id });
  }
  render() {
    return (
    <div className="App">
      <div>
          <div className="main-menu disp-inline">
            <MenuComponent displayId={this.state.displayId} changeId={this.changeIdfn.bind(this)}/>
              {/*<div className="sidenav">
                {
                  Object.keys(rootData).map(id => {
                    return (
                    <div key={id} className={`items ${this.state.displayId === id ? "menu-active" : ""}`}
                      onClick={() => {
                        this.changeIdfn(id)
                      }}>
                      <Link to={id}>{rootData[id]["foldername"]}</Link>
                    </div>)
                  })
                }
              </div>*/}
          </div>
          <div className="main-display disp-inline">
            <DisplayComponent subfoldersId= {rootData[this.state.displayId]["subfoldersId"]} />
          </div>
      </div>
    </div>
  );
  }
}

export default App;
