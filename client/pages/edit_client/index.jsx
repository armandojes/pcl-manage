import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetch_clients } from '../../redux/clients';
import LoadingPage from '../../components/loading_page';
import ClientForm from '../../components/client_form';
import api from '../../api';

function EditClient (props){

  useEffect(() => {
    if (!props.client) props.fetch_clients();
  })

  if (!props.client) return (<LoadingPage />)

  return (
    <ClientForm
      handleAction={api.client.update}
      client={props.client}
      title="Actualizar cliente"
      success_message="Usuario actualizado correctamente"
      error_message="Error al guardar cambios!"
    />
  );
}

function mapStateToProps(state, props){
  const client = state.clients.items.filter(client => client.id == props.match.params.id)[0] || null;
  return {
    client,
  }
}

export default connect(mapStateToProps, {fetch_clients})(EditClient);
