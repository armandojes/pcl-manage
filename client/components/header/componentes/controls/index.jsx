import React from 'react';
import style from './style';
import { connect } from 'react-redux';
import { set_session } from '../../../../redux/session'

function Controls (props){

  if (!props.logged) return null;

  function handleClose(){
    props.set_session({
      name: '',
      logged: false,
      id: 0,
      access_token: null,
    });
  }

  return (
    <div className={style.content}>
      {props.name}
      <img
        className={style.close_icon}
        src={`${ASSETS}/close.png`}
        onClick={handleClose}
      />
    </div>
  )
}

export default connect(state => state.session, {set_session})(Controls);
