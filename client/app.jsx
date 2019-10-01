import React from 'react';
import 'reset-css';
import './styles.css';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';

import List from './pages/list';


function App (props) {
  return (
    <div role="aplication">
      <Header />
      <Switch>
        <Route path='/' exact={true} component={List} />
      </Switch>
    </div>
  )
}

export default App;
