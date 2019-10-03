import React from 'react';
import style from './style'
import Container from '../container';
import Loading from '../loading';

function LoadingPage (){
  return (
    <Container className={style.loading_container}>
      <Loading />
    </Container>
  )
}

export default LoadingPage;
