import React from 'react';
import { provideState, injectState, softUpdate } from 'freactal';
import logo from '../logo.svg';
import './App.css';

const stateInitializer = {
  initialState: () => ({ localCounter: 0 }),
  effects: {
    localAddOne: softUpdate(state => ({
      localCounter: state.localCounter + 1,
    })),
  },
};

const wrapInState = provideState(stateInitializer);

export default wrapInState(
  injectState(({ state, effects }) => (
    <div className="App">
      <header className="App__header">
        <img
          src={logo}
          className="App__header__logo"
          alt="logo"
          onClick={effects.localAddOne}
        />
        <h1 className="App__header__title">
          Welcome to React {state.localCounter}
        </h1>
      </header>
      <p className="App__intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  ))
);
