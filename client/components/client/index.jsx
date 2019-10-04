import React from 'react';
import style from './style';

function Client (props){
  return (
    <article className={style.item}>
      <div className={style.name}>
        {props.name}
      </div>
      <div className={style.adress}>
        {props.adress}
      </div>
      <div className={style.number}>
        {props.number}
      </div>
      <div className={style.const}>
        $ {props.cost}.00
      </div>
    </article>
  )
}

export default Client;
