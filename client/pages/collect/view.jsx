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
            Periodo:
          </div>
          <div className={style.value}>
            {props.period}
          </div>
        </div>
        {props.view_surcharge === 'display' && (
          <div className={style.row}>
            <div className={style.description}>
              Recargo:
            </div>
            <div className={style.value}>
              $ {props.surcharge} .00
            </div>
            <div
              dangerouslySetInnerHTML={{__html: 'M'}}
              className={style.button_cancel}
              onClick={props.mod_surcharge}
            />
            <div
              className={style.button_cancel}
              onClick={props.cancel_surcharge}
              > X </div>
          </div>
        )}
        {props.view_surcharge === 'form' && (
          <div className={style.row}>
            <input
              className={style.input}
              type="text"
              value={props.surcharge}
              onChange={props.handleChange}
            />
            <div
              className={style.button_cancel}
              dangerouslySetInnerHTML={{__html: '&#9989'}}
              onClick={props.update_surcharge}
            />

          </div>
        )}

        <div className={style.row}>
          <div className={style.description}>
            Total:
          </div>
          <div className={`${style.value} ${style.total}`}>
            $ {props.total}.00
          </div>
        </div>
        <div>
          {props.view_surcharge === 'display' && (
            <button
              className={style.button}
              onClick={props.handleCollect}
            >Cobrar</button>
          )}
          {props.view_surcharge === 'form' && (
            <button className={`${style.button} ${style.button_gray}`}>Cobrar</button>
          )}
        </div>
      </div>
    </Container>
  )
}

export default View;
