import React from 'react';
import { Route, Router } from 'react-router';
import jquery from 'jquery';

import About from './components/About';
import Landing from './components/Landing';
import NotFoundPage from './components/NotFoundPage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default Routes;
