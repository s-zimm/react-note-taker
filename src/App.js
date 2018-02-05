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
      ]
    }
  }

  // _handleClick(title) {

  // }

  _handleTyping = (newText, docTitle) => {
    this.state.documents = {
      title: docTitle,
      content: newText
    }
  }

  render() {
    return (
      <div>
        <h1 className="header">Note Taker</h1>
        <div className="App">
          <TitleContainer 
            data={this.state}
            // handleClick={_handleClick(title)}
          />
          <Content 
            data={this.state}
            handleChange={this._handleTyping}
          />
        </div>
      </div>
    );
  }
}

export default App;
