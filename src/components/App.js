import React from 'react';
import logo from '../logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App__header">
      <img src={logo} className="App__header__logo" alt="logo" />
      <h1 className="App__header__title">Welcome to React</h1>
    </header>
    <p className="App__intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
