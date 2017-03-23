'use strict';

import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class probSol extends Component {
  render () {
    return (
      <div className="problem-solution">
        <Row>
        <Col class="col-sm-12 col-md-4"><h4>The Problem</h4>
          <p>School is expensive, there are cases of schools being partially or fully discredited. Not knowing where the good schools to attend are vital, time saving, and money saving, and best of all, you can be sure you are attending a good school.</p>
        </Col>
        <Col class="col-sm-12 col-md-4"><h4>The Solution</h4>
          <p>Create a crowd-sourced database giving information about the schools, with all information being verified by administrators. The info is fast, it will be accurate, and you get an opinion of the school from various students</p>
        </Col>
        <Col class="col-sm-12 col-md-4"><h4>How Do You Fit In?</h4>
          <p>Sign up today! Be part of the solution to help others. If you wish to sign up for a new account, the form is just below.</p>
        </Col>
        </Row>
      </div>
    );
  }
}
