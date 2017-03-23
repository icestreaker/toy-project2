'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="notFound">
        <h1>
          <p>Error 404: Page Not Found</p>
        </h1>
        <h3>
          <p>
            <Link to="/">Go Back to the main page</Link>
          </p>
        </h3>
      </div>
    );
  }
}
