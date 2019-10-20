import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetch_pays} from '../../redux/payments';
import {fetch_clients} from '../../redux/clients';
import LoadingPage from '../../components/loading_page'
import View from './view';
import moment from '../../helpers/moment';

function Client (props){

  useEffect(() => {
    if (!props.pays)props.fetch_pays(moment.get_year());
    if (!props.client) props.fetch_clients();
  },[]);

  if (!props.client) return (<LoadingPage />)

  return (
    <View
      client={props.client || []}
      pays={props.pays || []}
    />
  )
}

function mapStateToProps (state, props){
  const client = state.clients.items.filter( client => props.match.params.id == client.id)[0] || null;
  var pays = state.payments.items.filter( pay => props.match.params.id == pay.id_client);
  pays = pays.length ? pays : null;
  return {client, pays};
}

export default connect(mapStateToProps, {fetch_pays, fetch_clients} )(Client);
