import React from 'react';
import style from './style';

function Loading (){
  return (
    <img className={style.logo} src={`${ASSETS}/loading.png`} />
  )
}

export default Loading;
