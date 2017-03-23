'use strict';

import React, { Component } from 'react';
import newUser from './newUser';
import { Row, Col } from 'reactstrap';

export default class appHeader extends Component {
  render () {
    return (
      <div>

        <Row>
        <Col class="col-sm-12 col-md-12">
          <h2>Do you want a good education and get the bang for your buck at the school you want to attend?</h2>
          <h3>You are at the right place!</h3>
          <p>So what is going on and what are we doing to help fix the problem?</p>
        </Col>
        <hr />
        </Row>


      </div>
    );
  }
}
