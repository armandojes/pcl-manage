import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import View from './view';
import { fetch_clients } from '../../redux/clients';
import SessionHoc from '../../helpers/session_hoc';
import LoadingPage from '../../components/loading_page'
import moment from '../../helpers/moment.js';

function Collect (props){

  const [surcharge, set_surcharge] = useState(get_surcharge());

  useEffect(() => {!props.client && props.fetch_clients();},[])

  function get_surcharge(){
    moment.get_diference();
    return '0.00';
  }

  if (props.client) return (<View
    {...props.client}
    local={props.session.name}
    surcharge={surcharge}
  />);
  return (<LoadingPage {...props.client}/>);
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
