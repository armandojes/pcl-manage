import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import View from './view';
import { fetch_clients } from '../../redux/clients';
import { fetch_pays } from '../../redux/payments';
import moment from '../../helpers/moment';
import LoadingPage from '../../components/loading_page'

function Reports (props){

  useEffect(() => {
    if (props.clients.length === 0) props.fetch_clients();
    if (props.pays.length === 0) props.fetch_pays(moment.get_year());
  },[]);

  if (props.clients.length === 0 || props.pays.length === 0) return (<LoadingPage />)

  return (
    <View
      clients={props.clients}
      pays={props.pays}
    />
  )
}


function mapStateToProps (state){
  const clients = state.clients.items;
  const pays = state.payments.items;
  return {
    clients,
    pays,
  }
}

const mapDispatch = {
  fetch_clients,
  fetch_pays
}

export default connect(mapStateToProps, mapDispatch)(Reports);
