'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import {Row, Col, Input, Label, InputGroupButton, Form, FormGroup} from 'reactstrap';

export default class newUser extends Component {
  render() {
    return (
      <div className="newUser">

        <hr />
        <Row>
        <Col class="col-sm-12 col-md-4"></Col>
        <Col class="col-sm-12 col-md-4">
          <Form>
            <FormGroup>
              <Label id="email">Please enter your email:</Label>
              <Input type="text" />
              <Label id="password">Please type a password:</Label>
              <Input type="text" />
              <Label id="verify_password">Please re-type your password:</Label>
              <Input type="text" />
              <Label>Please click to verify your new account: </Label>
              <InputGroupButton>Submit</InputGroupButton>
            </FormGroup>
          </Form>
        </Col>
        <Col class="col-sm-12 col-md-4"></Col>
        </Row>

      </div>
    );
  }
}
