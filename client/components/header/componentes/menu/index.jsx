import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';

function Menu (){
  return (
    <section>
      <Link to="/clientes" className={style.menu_item}>Clientes</Link>
      <Link to="/pagados" className={style.menu_item}>Pagados</Link>
      <Link to="/nopagados" className={style.menu_item}>No pagados</Link>
      <Link to="/actas" className={style.menu_item}>actas</Link>
      <Link to="/curp" className={style.menu_item}>Curps</Link>
    </section>
  )
}

export default Menu;
