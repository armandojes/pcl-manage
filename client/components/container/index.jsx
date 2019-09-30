import React from 'react';
import style from './style.css';

function Container (props){
  return (
    <section className={`${style.container} ${props.className || ''}`}>
      {props.children}
    </section>
  )
}

export default Container;
