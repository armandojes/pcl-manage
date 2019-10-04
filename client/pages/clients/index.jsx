import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { fetch_clients } from '../../redux/clients';
import List from '../../components/list';
import Loading from '../../components/loading_page';

function Clients (props){

  useEffect(() => {
  !props.items.length && props.fetch_clients();
  },[])

  if (props.loading) return (<Loading />)

  return (<List {...props}/>)
}

const mapState = state => state.clients;

const mapDispatch = {fetch_clients}

export default connect(mapState, mapDispatch)(Clients);
