import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import View from './view';
import { fetch_clients } from '../../redux/clients';
import SessionHoc from '../../helpers/session_hoc';


function Collect (props){

  useEffect(() => {!props.client && props.fetch_clients();},[])

  return (<View
    {...props}
  />)
}



const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const clients = state.clients.items;
  const client_select = clients.filter( client => client.id == id )[0] || null;

  return {
    loading: state.clients.loading,
    client: client_select,
  }
}

export default connect(mapStateToProps, {fetch_clients})(SessionHoc(Collect));
