import React from 'react';
import ClientForm from '../../components/client_form';

function NewClient(props){
  return (
    <ClientForm
      title="Nuevo cliente"
      success_message="Usuario guardado correctamente"
      error_message="Error al guardar el cliente!"
    />
  )
}

export default NewClient;
