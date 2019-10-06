import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import View from './view';
import { fetch_clients } from '../../redux/clients';

function Collect (props){

  console.log('render...')

  useEffect(() => {
    !props.data && props.fetch_clients();
  },[])

  return (<View
    {...props}
    
  />)
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const clients = state.clients.items;
  var client_select = clients.filter( client => client.id == id )[0] || null;

  return {
    loading: state.clients.loading,
    data: client_select,
  }
}

export default connect(mapStateToProps, {fetch_clients})(Collect);
