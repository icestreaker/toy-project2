import React, { Component } from 'react';
import appHeader from './appHeader';
import probSol from './probSol';
import newUser from './newUser';

export default class landing extends Component {
  render () {
    return (
      <div className="homePage">
        <a href="./appHeader"></a>
        <a href="./probSol"></a>
        <a href="./newUser"></a>
      </div>
    );
  }
}
