import React from 'react';
import ClientForm from '../../components/client_form';
import api from '../../api';
function NewClient(props){

  return (
    <ClientForm
      handleAction={api.client.create}
      title="Nuevo cliente"
      success_message="Usuario guardado correctamente"
      error_message="Error al guardar el cliente!"
    />
  )
}

export default NewClient;
