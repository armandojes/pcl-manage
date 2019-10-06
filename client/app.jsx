import React from 'react';
import 'reset-css';
import './styles.css';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';

import Clients from './pages/clients';
import Login from './pages/login';
import Paids from './pages/paids';


function App (props) {
  return (
    <div role="aplication">
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Clients} />
        <Route path='/clientes' exact={true} component={Clients} />
        <Route path='/login' exact={true} component={Login} />
        <Route path='/pagados' exact={true} component={Paids} />
      </Switch>
    </div>
  )
}

export default App;
