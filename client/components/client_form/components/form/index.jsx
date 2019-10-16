import React, { useState } from 'react';
import style from './style'
import moment from '../../../../helpers/moment';

function Form (props){

  const [name, set_name] = useState(props.name || '');
  const [cost, set_cost] = useState(props.cost || '');
  const [number, set_number] = useState(props.number || '');
  const [adress, set_adress] = useState(props.adress || '');

  function handleCost(event){
    if (event.target.value === ''){set_cost(''); return false}
    const latest_letter = event.target.value.charAt(event.target.value.length-1)
    const parsed = parseInt(latest_letter, 10);
    if (parsed || parsed === 0) set_cost(event.target.value)
  }

  function handleNumber(event){
    if (event.target.value === ''){set_number(''); return false}
    const latest_letter = event.target.value.charAt(event.target.value.length-1)
    const parsed = parseInt(latest_letter, 10);
    if (parsed || parsed === 0) set_number(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    props.handleAction({name,cost,number,adress, id: props.id || null, date: moment.get_date()});
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2 className={style.title}>{props.title}</h2>
      <input
        value={name}
        onChange={event => set_name(event.target.value)}
        type="text"
        placeholder="Nombre completo"
        className={style.input}
      />
      <input
        value={cost}
        onChange={handleCost}
        type="number"
        placeholder="Mensualidad"
        className={style.input}/>
      <input
        value={number}
        onChange={handleNumber}
        type="number"
        placeholder="Numero"
        className={style.input}/>
      <input
        value={adress}
        onChange={event => set_adress(event.target.value)}
        type="text"
        placeholder="Direccion"
        className={style.input}/>
      <input
        type="submit"
        className={style.input}
        value="Guardar"/>
    </form>
  )
}

export default Form;
