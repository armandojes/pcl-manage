import React from 'react';
import style from './style';
import Container from '../../components/container';
import Loading from '../../components/loading';


function View (props){
  return (
    <Container className={style.container}>
      <div className={style.box}>
        {props.view === 'form' && (
          <form className={style.form} onSubmit={props.handleSubmit}>
            <h1 className={style.title}>Iniciar Session</h1>
            <input
              className={style.input}
              type="text"
              placeholder="Usuario"
              onChange={event => props.set_user(event.target.value)}
              value={props.user}
              autoComplete="off"
            />
            <input
              className={style.input}
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              onChange={event => props.set_password(event.target.value)}
              value={props.password}
            />
            <input
              className={style.input}
              type="submit"
              value="iniciar session"
            />
          </form>
        )}
        {props.view === 'loading' && (
          <Loading />
        )}
      </div>
    </Container>
  )
}

export default View;
