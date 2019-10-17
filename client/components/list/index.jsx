import React, { useState } from 'react';
import style from './style';
import Container from '../container';
import Client from '../client';
import Search from '../search';
import normalize from '../../helpers/normalize';



function List (props){

  const [keyword, set_keyword] = useState('');

  function handleChange (event){
    set_keyword(event.target.value);
  }

  function filter (){
    if (keyword === '') return props.items;
    const filtered = props.items.filter((item) => {
      const name = normalize(item.name);
      const keywordparsed = normalize(keyword);
      return name.includes(keywordparsed);
    });
    return filtered;
  }

  return (
    <Container className={style.table_container}>
      <Search handleChange={handleChange}/>
      <Client
        name="Nombre"
        adress="Direccion"
        number="Numero"
        latest_pay="Ultimo pago"
        cost="Mensualidad"
      />
      {filter().map((client) => <Client {...client} key={client.id}/>)}
    </Container>
  )
}

export default List;
