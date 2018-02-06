import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TitleContainer from './components/TitleContainer';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [
        {
          title: 'Doc 1',
          content: 'Hello!'
        },
        {
          title: 'Doc 2',
          content: 'Yo!'
        },
        {
          title: 'Doc 3',
          content: 'Hey!'
        }
      ],
      selectedIndex: 0
    }
  }

  _setSelectedIndex = (i)  => {
    this.setState({
      selectedIndex: i
    })
  }

  _handleTyping = (p) => {
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.documents[oldState.selectedIndex].content = p;
      return newState;
    })
  }

  _handleTitleChange = (value) => {
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.documents[oldState.selectedIndex].title = value;
      return newState;
    })
  }

  _handleTitleClick = () => {
    console.log('hi!!')
  }

  render() {
    return (
      <div>
        <h1 className="header">Note Taker</h1>
        <div className="App">
          <TitleContainer 
            data={this.state}
            handleClick={this._setSelectedIndex}
          />
          <Content 
            handleTitleChange={this._handleTitleChange}
            data={this.state.documents[this.state.selectedIndex]}
            handleChange={this._handleTyping}
            handleTitleClick={this._handleTitleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
