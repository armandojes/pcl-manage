import { render } from 'react-dom';
import App from './app';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function Client (){
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

render (<Client />, document.getElementById('render_target'));
