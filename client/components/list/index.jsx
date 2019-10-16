import React from 'react';
import style from './style';
import Container from '../container';
import Client from '../client';

function List (props){
  return (
    <Container className={style.table_container}>
      <Client
        name="Nombre"
        adress="Direccion"
        number="Numero"
        latest_pay="Ultimo pago"
        cost="Mensualidad"
      />
      {props.items.map((client) => <Client {...client} key={client.id}/>)}
    </Container>
  )
}

export default List;
