import React, { Component } from 'react';
import classNames from 'classnames';

import logo from 'assets/logo.svg';

class Home extends Component {
  render() {
    return (
      <div className={classNames('home')}>   
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    )
  }
}

export default Home;
