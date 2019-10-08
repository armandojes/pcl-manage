import React from 'react';
import Container from '../../components/container';
import style from './style';

function View (props){

  return (
    <Container className={style.container}>
      <div className={style.box}>
        <div className={`${style.row} ${style.title}`}>
          {props.local}
        </div>
        <div className={style.row}>
          <div className={style.description}>
            Nombre:
          </div>
          <div className={style.value}>
            {props.name}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.description}>
            Direccion:
          </div>
          <div className={style.value}>
            {props.adress}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.description}>
            Telefono:
          </div>
          <div className={style.value}>
            {props.number}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.description}>
            Mensualidad:
          </div>
          <div className={style.value}>
            $ {props.cost}.00
          </div>
        </div>
        <div className={style.row}>
          <div className={style.description}>
            Recargo:
          </div>
          <div className={style.value}>
            {props.surcharge}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.description}>
            Total:
          </div>
          <div className={style.value}>
            $ {props.cost}.00
          </div>
        </div>
        <div>
          <button className={style.button}>Cobrar</button>
        </div>
      </div>
    </Container>
  )
}

export default View;
