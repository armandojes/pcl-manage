import React, { useState } from 'react';
import style from './style'

function Form (props){

  const [name, set_name] = useState('');
  const [cost, set_cost] = useState('');
  const [number, set_number] = useState('');
  const [adress, set_adress] = useState('');

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
    console.log('execute form');
    event.preventDefault();
    props.handleAction({name,cost,number,adress});
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
