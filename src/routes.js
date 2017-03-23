'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import About from './components/About';
import Landing from './components/Landing';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Landing}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
