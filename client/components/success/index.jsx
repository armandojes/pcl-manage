import React from 'react';
import style from './style'
import Container from '../container';
import Loading from '../loading';

function Success (props){
  return (
    <Container className={style.loading_container}>
      <div className={style.box}>
        <img className={style.picture} src={`${ASSETS}/success.png`} />
        <div className={style.message}>{props.message || 'Success' }</div>
      </div>
    </Container>
  )
}
export default Success;
