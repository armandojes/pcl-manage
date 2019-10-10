import React, { useState } from 'react';
import style from './style.css';
import Container from '../container';
import Form from './components/form';
import Error from './components/error';
import Success from './components/success';
import Loading from '../../components/loading';

function ClientForm(props){

  //form || loading || success || error
  const [display, set_display] = useState('error');

  return (
    <Container className={style.container}>
      <div className={style.box}>
        {display === 'form' && (<Form title={props.title}/>)}
        {display === 'loading' && (<Loading />)}
        {display === 'success' && (<Success message={props.success_message} />)}
        {display === 'error' && (<Error message={props.error_message} />)}
      </div>
    </Container>
  )
}

export default ClientForm;
