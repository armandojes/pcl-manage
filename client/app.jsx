import React from 'react';
import 'reset-css';
import './styles.css';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';

import Clients from './pages/clients';
import Login from './pages/login';


function App (props) {
  return (
    <div role="aplication">
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Clients} />
        <Route path='/clientes' exact={true} component={Clients} />
        <Route path='/login' exact={true} component={Login} />
      </Switch>
    </div>
  )
}

export default App;
