import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import DualListParent from './components/DualListParent';

export default (
  <Route component={App}>
    <Route path='/home' component={DualListParent} />
  </Route>
);
