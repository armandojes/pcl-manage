import React from 'react';
import style from './style'
import Container from '../container';
import Loading from '../loading';

function Error (props){
  return (
    <Container className={style.loading_container}>
      <div className={style.box}>
        <img className={style.picture} src={`${ASSETS}/error.png`} />
        <div className={style.message}>{props.message || 'Error' }</div>
      </div>
    </Container>
  )
}
export default Error;
