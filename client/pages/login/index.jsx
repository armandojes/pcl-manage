import React, { useState } from 'react';
import View from './view';
import api from '../../api';

function Login (props){

  const [view, set_view] = useState('form');
  const [user, set_user] = useState('');
  const [password, set_password] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.length < 4 || password.length < 4){
      alert('porfavor llena los campos correctamente!');
      return false;
    }
    handleLogin();
  }

  const handleLogin = async () => {
    const state = await api.login.start({user,password});
    console.log(state);
  }

  return (
    <View
      {...props}
      handleSubmit={handleSubmit}
      view={view}
      set_view={set_view}
      user={user}
      set_user={set_user}
      password={password}
      set_password={set_password}
    />
  )
}


export default Login;
