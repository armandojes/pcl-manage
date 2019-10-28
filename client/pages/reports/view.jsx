import React, {useState} from 'react';
import Container from '../../components/container';
import style from './style';
import moment from '../../helpers/moment'
import Document from '../../helpers/document'
import Loading from '../../components/loading';

function View (props){
  const [loading, set_loading] = useState(false);
  const period_now = moment.get_period();
  const pays_this_period = props.pays.filter( pay =>  period_now === pay.period);
  const clients_paid = props.clients.filter(client => client.latest_pay === period_now)
  const client_not_paid = props.clients.filter(client => client.latest_pay != period_now)
  const pays_from_places = split_clients_for_place_to_paid();


  function compose_clients (){
    return clients_paid.map(client => {
      const pay_for_this_client = pays_this_period.filter(pay => client.id === pay.id_client)[0];
      client.place_to_paid = pay_for_this_client.place;
      return client;
    })
  }

  function split_clients_for_place_to_paid (){
    const places = {};
    compose_clients().map(client => {
      if (places[client.place_to_paid] === undefined) places[client.place_to_paid] = [];
      const {place_to_paid, ...client_data} = client;
      places[client.place_to_paid].push(client_data);
    })
    return places;
  }

  function handleClick (){
    set_loading(true);
    Document.create_sheet('clientes', props.clients);
    Document.create_sheet('Pagados', clients_paid);
    Document.create_sheet('No pagados', client_not_paid);

    Object.keys(pays_from_places).map(place_name => {
      Document.create_sheet(place_name, pays_from_places[place_name])
    })
    Document.download(period_now);
  }

  return (
    <Container className={style.container}>
      {loading && (
        <Loading />
      )}
      {!loading && (
        <button className={style.button} onClick={handleClick}>Generar reporte xls</button>
      )}
    </Container>
  )
}

export default View;
