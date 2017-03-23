'use strict';

import React, { Component } from 'react';


export default class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <header>

        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>

        </footer>
      </div>
    );
  }
}
