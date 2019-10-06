import React from 'react';
import style from './style';
import usePaid from '../../hocks/use_paid';
import { withRouter } from 'react-router-dom';

function Client (props){

  const is_paid = usePaid(props.latest_pay);

  const handleClick = () => {
    if (is_paid) return false;
    props.history.push(`/cobrar/${props.id}`);
  }

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
      <button onClick={handleClick} className={is_paid ? style.button_paid :  style.button}>{is_paid ? 'Pagado': 'Cobrar'}</button>
    </article>
  )
}

export default withRouter(Client);
