import React from 'react';
import style from './style.css';
import Container from '../container';
import Menu from './componentes/menu';
import Controls from './componentes/controls';


function Header (props) {
  return (
    <header className={style.header}>
      <Container className={style.body}>
        <div className={style.primary}>
          <img src={`${ASSETS}/logo.png`} className={style.logo} />
          <Menu />
        </div>
        <Controls />
      </Container>
    </header>
  )
}

export default Header;
