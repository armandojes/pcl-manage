import React, { useEffect } from 'react';
import Container from '../../components/container';
import { connect } from 'react-redux';
import { fetch_clients } from '../../redux/clients';

function List (props){

  useEffect(() => {
    props.dispatch(fetch_clients());
  },[])

  return (
    <Container>
      hello list...
    </Container>
  )
}

function mapStateToProps(state) {
  console.log(state);
  return {
    ...state.clients
  }
}

export default connect(mapStateToProps)(List);
