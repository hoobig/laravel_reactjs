require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import MainApp from './components/MainApp';
import CreateItem from './components/ItemComponent/CreateItem';
import DisplayItem from './components/ItemComponent/DisplayItem';
import EditItem from './components/ItemComponent/EditItem';

render(
  <Router history={browserHistory}>
      <Route path="/" component={MainApp} >
        <Route path="/add-item" component={CreateItem} />
        <Route path="/display-item" component={DisplayItem} />
        <Route path="/edit/:id" component={EditItem} />
      </Route>
    </Router>, document.getElementById('main_app'));
