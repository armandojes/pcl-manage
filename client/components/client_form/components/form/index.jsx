import React from 'react';
import style from './style'

function Form (props){
  return (
    <form className={style.form}>
      <h2 className={style.title}>{props.title}</h2>
      <input
        type="text"
        placeholder="Nombre completo"
        className={style.input}/>
      <input
        type="text"
        placeholder="Mensualidad"
        className={style.input}/>
      <input
        type="text"
        placeholder="Numero"
        className={style.input}/>
      <input
        type="text"
        placeholder="Direccion"
        className={style.input}/>
      <input
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
