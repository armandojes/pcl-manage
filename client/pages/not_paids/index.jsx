import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetch_clients } from '../../redux/clients';
import List from '../../components/list';
import Loading from '../../components/loading_page';
import moment from '../../helpers/moment';

function Paids (props){

  useEffect(() => {
  !props.items.length && props.fetch_clients();
  },[])
  
  if (props.loading) return (<Loading />)
  return (<List {...props}/>)
}

const mapStateToProps = (state) => {
  const clients_paid = state.clients.items.filter(client => client.latest_pay === moment.get_period());
  return {...state.clients, items: clients_paid};
}

export default connect(mapStateToProps, {fetch_clients})(Paids);
