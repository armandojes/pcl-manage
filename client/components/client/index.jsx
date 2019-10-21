import React from 'react';
import style from './style';
import usePaid from '../../hocks/use_paid';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Client (props){

  const is_paid = usePaid(props);

  const handleClick = () => {
    if (is_paid) return false;
    props.history.push(`/cobrar/${props.id}`);
  }

  return (
    <article className={`${style.item} ${!props.id && (style.header)}`}>
      {props.id && (
        <Link to={`/cliente/${props.id}`} className={style.name}>
          {props.name}
        </Link>
      )}
      {!props.id && (
        <div className={style.name}>
          {props.name}
        </div>
      )}
      <div className={style.adress}>
        {props.adress}
      </div>
      <div className={style.number}>
        {props.number}
      </div>
      <div className={style.latest_pay}>
        {props.latest_pay}
      </div>
      <div className={style.const}>
        {props.id
          ? (`$ ${props.cost}.00`)
          : (`Menusualidad`)}
      </div>

      {props.id && is_paid && is_paid === true && (
        <button className={style.button_paid}> Pagado </button>
      )}
      {props.id && is_paid === false && (
        <button onClick={handleClick} className={style.button}> Cobrar </button>
      )}
      {props.id && is_paid === 'new' && (
        <button onClick={handleClick} className={style.button_new}> Nuevo </button>
      )}
      {props.id && (
        <div className={style.status}>
          <div className={props.status === 'baja' ? style.baja : style.active } />
          {props.status}
        </div>
      )}
      {props.id && (
        <Link className={style.update} to={`/editarcliente/${props.id}`} >
          <img src={`${ASSETS}/update.png`} />
        </Link>
      )}

    </article>
  )
}

export default withRouter(Client);
