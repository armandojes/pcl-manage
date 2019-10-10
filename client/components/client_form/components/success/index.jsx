import React, {Fragment} from 'react';
import style from './style';

function Success(props){
  return (
    <section className={style.content}>
      <img
        className={style.icon}
        src={`${ASSETS}/success.png`}
      />
      <div
        className={style.message}>
        {props.message}
      </div>
    </section>
  )
}

export default Success;
