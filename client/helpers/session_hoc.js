import React from 'react';
import Login from '../pages/login';
import { connect } from 'react-redux';

function SessionHoc (WrappedComponent){
  function Enhanced(props){
    return props.session.logged
    ? (<WrappedComponent {...props}/>)
    : (<Login />)
  }
  return connect (state => {return {session: state.session}})(Enhanced)
}

export default SessionHoc;
