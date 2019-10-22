import React from 'react';
import Container from '../../components/container';
import { connect } from 'react-redux';
import style from './style';


function Default (props){
  return (

    <Container className={style.container}>
      <img src={`${ASSETS}/logo.png`}/>
      <h1 className={style.title}>Sucursal {props.name}</h1>
    </Container>

  )
}

const  mapStateToProps = (state) => {
  return state.session
}

export default connect(mapStateToProps)(Default);
