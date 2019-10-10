import React, {Fragment} from 'react';
import style from './style';

function Error(props){
  return (
    <section className={style.content}>
      <img
        className={style.icon}
        src={`${ASSETS}/error.png`}
      />
      <div
        className={style.message}>
        {props.message}
      </div>
    </section>
  )
}

export default Error;
