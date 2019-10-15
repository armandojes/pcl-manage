import React, { useState } from 'react';
import style from './style';
import Container from '../../components/container'


function Caclculator (){

  const [input, set_input] = useState('');

  const handleChange = (event) => {
    const exist_point = input.indexOf('.') != -1;
    const raw_value = event.target.value;
    const latest_letter = raw_value.charAt(raw_value.length-1)
    if (latest_letter === '') return set_input(raw_value);
    if (!isNaN(parseInt(latest_letter))) set_input(raw_value);
    if (latest_letter === '.' && !exist_point) set_input(raw_value);
    if (input.length > raw_value.length) set_input(raw_value);
  }

  function calculate(){
    const result = (input * 1.2) * 1.16;
    return result.toFixed(2);
  }


  return (
    <Container className={style.container}>
      <div className={style.box}>
        <h2 className={style.title}>Calculadora de precios</h2>
        <input type="text"
          className={style.input}
          onChange={handleChange}
          value={input}
          placeholder="Precio de factura"
        />
        <div className={style.result}>
          $ {calculate()} MXN
        </div>
      </div>
    </Container>
  )
}

export default Caclculator;
