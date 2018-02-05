import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TitleContainer from './components/TitleContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="header">Note Taker</h1>
        <div className="App">
          <TitleContainer />
        </div>
      </div>
    );
  }
}

export default App;
