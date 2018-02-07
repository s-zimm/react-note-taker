import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TitleContainer from './components/TitleContainer';
import Content from './components/Content';

import saveLocal from './localStorage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [
        {
          title: 'Click me to change!',
          content: 'Write notes here!'
        }
      ],
      selectedIndex: 0
    }
    
  }

  render() {
    
    saveLocal(this.state);

    return (
      <div>
        <h1 className="header">Note Taker</h1>
        <div className="App">
          <TitleContainer 
            data={this.state}
            handleClick={this._setSelectedIndex}
            newDocWillLoad={this._handleNewDoc}
          />
          <Content 
            handleTitleChange={this._handleTitleChange}
            data={this.state.documents[this.state.selectedIndex]}
            handleChange={this._handleTyping}
          />
        </div>
      </div>
    );
  }

  _setSelectedIndex = (i)  => {
    this.setState({
      selectedIndex: i
    });
  }

  _handleTyping = (value) => {
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.documents[oldState.selectedIndex].content = value;
      return newState;
    });
  }

  _handleTitleChange = (value) => {
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.documents[oldState.selectedIndex].title = value;
      return newState;
    });
  }

  _handleNewDoc = () => {
    this.setState({
      documents: this.state.documents.concat({ title: `New Doc`, content: 'Write here!'})
    });
  }
}

export default App;
