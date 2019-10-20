import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style';
import Container from '../../components/container';


function View (props){
  console.log(props);
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'nobiembre',
    'diciembre',
  ];

  //extraer solo el nombre de las meses en los pagos
  function axtract_name_months_in_pays(){
    const pays = props.pays.map(pay => {
      return pay.period.split(' ')[0];
    })
    return pays;
  }


  //armar un objeto con datos finales
  function compose(){
    const pays = axtract_name_months_in_pays();
    const months_composed = months.map((month) => {
      return {
        is_paid: pays.includes(month),
        name: month,
      }
    })
    return months_composed;
  }



  return (
    <Container className={style.container}>
      <div className={style.calendar}>
        {compose().map ((month, index) => (

          <div className={style.month} key={month.name}>
            <div className={style.month_header}>
              <span className={month.is_paid ? style.green : style.red} />
              {month.name}
            </div>
            {!month.is_paid && (
              <Link
                to={`/cobrar/${props.client.id}/${index + 1}`}
                className={style.button}>Cobrar
              </Link>
            )}
            {month.is_paid && (
              <div>Pagado</div>
            )}
          </div>

        ))}
      </div>
    </Container>
  )
}

export default View;
