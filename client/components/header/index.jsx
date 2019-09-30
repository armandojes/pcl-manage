import React from 'react';
import style from './style.css';
import Container from '../container';
import Menu from './componentes/menu';


function Header (props) {
  return (
    <header className={style.header}>
      <Container className={style.body}>
        <img src={`${ASSETS}/logo.png`} className={style.logo} />
        <Menu />
      </Container>
    </header>
  )
}

export default Header;
