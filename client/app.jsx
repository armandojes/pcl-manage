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
import NewClient from './pages/new_client';
import EditClient from './pages/edit_client';
import Calculator from './pages/calculator';
import Client from './pages/client';
import Default from './pages/default';
import session_hoc from './helpers/session_hoc';

function Pages () {
  return (
    <Switch>
      <Route path='/' exact={true} component={Clients} />
      <Route path='/calculadora' exact={true} component={Calculator} />
      <Route path='/clientes' exact={true} component={Clients} />
      <Route path='/pagados' exact={true} component={Paids} />
      <Route path='/nopagados' exact={true} component={NotPaids} />
      <Route path='/cobrar/:id' exact={true} component={Collect} />
      <Route path='/cobrar/:id/:month' exact={true} component={Collect} />
      <Route path='/nuevocliente' exact={true} component={NewClient} />
      <Route path='/editarcliente/:id' exact={true} component={EditClient} />
      <Route path='/cliente/:id' exact={true} component={Client} />
      <Route component={Default} />
    </Switch>
  )
}

const PagesProtected = session_hoc(Pages);

function App (props) {
  return (
    <div role="aplication">
      <Header />
      <PagesProtected />
    </div>
  )
}

export default App;
