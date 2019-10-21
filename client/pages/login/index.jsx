import React, { useState } from 'react';
import View from './view';
import api from '../../api';
import { connect } from 'react-redux';
import {set_session} from '../../redux/session';
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
    set_view('loading');
    const state = await api.login.start({user,password});
    if (state.error){
      set_view('form');
      alert(state.error_message);
    }
    else{
      props.set_session({
        name: state.payload.name,
        logged: true,
        id: state.payload.id,
        access_token: state.payload.token,
        admin: state.payload.admin,
      });
    }
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


export default connect(null, {set_session})(Login);
