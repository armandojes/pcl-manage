import React, { useEffect, memo } from 'react';
import Container from '../../components/container';
import { connect } from 'react-redux';
import { fetch_clients } from '../../redux/clients';

function List (props){

  useEffect(() => {
  !props.items.length && props.fetch_clients();
  },[])

  return (
    <Container>
      hello list...
    </Container>
  )
}

const mapState = state => state.clients;

const mapDispatch = {fetch_clients}

export default connect(mapState, mapDispatch)(List);
