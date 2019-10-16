import React from 'react';
import style from './style';
import usePaid from '../../hocks/use_paid';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Client (props){

  const is_paid = usePaid(props.latest_pay);

  const handleClick = () => {
    if (is_paid) return false;
    props.history.push(`/cobrar/${props.id}`);
  }

  return (
    <article className={`${style.item} ${!props.id && (style.header)}`}>
      <div className={style.name}>
        {props.name}
      </div>
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
      {props.id && (
        <Link className={style.update} to={`/editarcliente/${props.id}`} >
          <img src={`${ASSETS}/update.png`} />
        </Link>
      )}
      {props.id && is_paid && props.latest_pay != 'pending' && (
        <button className={style.button_paid}> Pagado </button>
      )}
    </article>
  )
}

export default withRouter(Client);
// {props.id && (
//   <button
//     onClick={handleClick}
//
//     className={is_paid ? style.button_paid :  style.button}>{is_paid ? 'Pagado': 'Cobrar'}
//
//   </button>
// )}
