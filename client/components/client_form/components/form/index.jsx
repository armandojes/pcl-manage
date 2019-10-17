import React, { useState } from 'react';
import style from './style'
import moment from '../../../../helpers/moment';

function Form (props){

  const [name, set_name] = useState(props.name || '');
  const [cost, set_cost] = useState(props.cost || '');
  const [number, set_number] = useState(props.number || '');
  const [adress, set_adress] = useState(props.adress || '');
  const [status, set_status] = useState(props.status || null);

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

  function handleStatus (event){
    console.log(event.target.value)
    set_status(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    props.handleAction({
      status,
      name,
      cost,
      number,
      adress,
      id: props.id || null,
      date: moment.get_date()
    });
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
        className={style.input}
      />
      <input
        value={number}
        onChange={handleNumber}
        type="number"
        placeholder="Numero"
        className={style.input}
      />
      <input
        value={adress}
        onChange={event => set_adress(event.target.value)}
        type="text"
        placeholder="Direccion"
        className={style.input}
      />
      {status && (
      <div className={style.radio}>
        <div className={style.radio_text}>Estado </div>
        <label className={style.radio_label}>
          <input
            name="status"
            type="radio"
            value="activo"
            checked={status === 'activo'}
            onChange={handleStatus}
          />
          Activo
        </label>
        <label className={style.radio_label}>
          <input
            name="status"
            type="radio"
            onChange={handleStatus}
            checked={status === 'baja'}
            value="baja"
          />
          Baja
        </label>

      </div>
      )}
      <input

        onChange={handleStatus}
        type="submit"
        className={style.input}
        value="Guardar"
      />
    </form>
  )
}

export default Form;
