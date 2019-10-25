import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';

function Menu (){
  return (
    <section>
      <Link to="/clientes" className={style.menu_item}>Clientes</Link>
      <Link to="/pagados" className={style.menu_item}>Pagados</Link>
      <Link to="/nopagados" className={style.menu_item}>No pagados</Link>
      <Link to="/nuevocliente" className={style.menu_item}>Nuevo cliente</Link>
      <Link to="/reportes" className={style.menu_item}>Reportes</Link>
      <Link to="/calculadora" className={style.menu_item}>Calculadora</Link>
    </section>
  )
}

export default Menu;
