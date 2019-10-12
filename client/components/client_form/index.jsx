import React, { useState } from 'react';
import {connect} from 'react-redux';
import style from './style.css';
import Container from '../container';
import Form from './components/form';
import Error from './components/error';
import Success from './components/success';
import Loading from '../../components/loading';
import { fetch_clients } from '../../redux/clients';

function ClientForm(props){

  // form || loading || success || error
  const [display, set_display] = useState('form');
  const [data, set_data] = useState(null);

  async function handleAction(data){
    set_display('loading');
    const response = await props.handleAction(data);
    props.fetch_clients();
    response.error
    ? set_display('error')
    : set_display('success');
  }

  return (
    <Container className={style.container}>
      <div className={style.box}>
        {display === 'form' && (<Form title={props.title} handleAction={handleAction} {...props.client}/>)}
        {display === 'loading' && (<Loading />)}
        {display === 'success' && (<Success message={props.success_message} />)}
        {display === 'error' && (<Error message={props.error_message} />)}
      </div>
    </Container>
  )
}

export default connect(null, {fetch_clients})(ClientForm);
