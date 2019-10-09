import React from 'react';
import 'reset-css';
import './styles.css';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';

import Clients from './pages/clients';
import Login from './pages/login';
import Paids from './pages/paids';
import NotPaids from './pages/not_paids';
import Collect from './pages/collect';



function App (props) {
  return (
    <div role="aplication">
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Clients} />
        <Route path='/clientes' exact={true} component={Clients} />
        <Route path='/pagados' exact={true} component={Paids} />
        <Route path='/nopagados' exact={true} component={NotPaids} />
        <Route path='/cobrar/:id' exact={true} component={Collect} />
      </Switch>
    </div>
  )
}

export default App;
