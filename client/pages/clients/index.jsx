import React, { useEffect, memo } from 'react';
import Container from '../../components/container';
import Loading from '../../components/loading_page';
import { connect } from 'react-redux';
import { fetch_clients } from '../../redux/clients';

function Clients (props){

  useEffect(() => {
  !props.items.length && props.fetch_clients();
  },[])

  if (props.loading) return (<Loading />)

  return (
    <Container>
      hello clients...
    </Container>
  )
}

const mapState = state => state.clients;

const mapDispatch = {fetch_clients}

export default connect(mapState, mapDispatch)(Clients);
