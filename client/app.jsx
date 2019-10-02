import React from 'react';
import 'reset-css';
import './styles.css';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';

import List from './pages/list';
import Login from './pages/login';


function App (props) {
  return (
    <div role="aplication">
      <Header />
      <Switch>
        <Route path='/' exact={true} component={List} />
        <Route path='/login' exact={true} component={Login} />
      </Switch>
    </div>
  )
}

export default App;
