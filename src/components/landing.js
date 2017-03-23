'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';
import appHeader from '../components/appHeader';
import probSol from '../components/probSol';
import newUser from '../components/newUser';

export default class landing extends Component {
  render () {
    return (
      <div>
        <appHeader />
        <probSol />
        <newUser />

        <h3>
          <p>
            <Link to="/About">Check out the group</Link>
          </p>
        </h3>

      </div>
    );
  }
}
