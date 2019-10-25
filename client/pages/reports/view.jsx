import React from 'react';
import Container from '../../components/container';
import style from './style';
import xlsx from 'xlsx';
import moment from '../../helpers/moment'


function View (props){


  const period_now = moment.get_period();
  const libro = xlsx.utils.book_new();
  const pays_this_period = props.pays.filter( pay =>  period_now === pay.period);
  const clients_paid = props.clients.filter(client => client.latest_pay === period_now)
  const client_not_paid = props.clients.filter(client => client.latest_pay != period_now)

  const transform_clients_before_to_excel = (clients) => clients.map((client, index) => ({
    id: index + 1,
    Nombre: client.name,
    Mensualidad: client.cost,
    Numero: client.number,
    Direccion: client.adress,
    Ultimo_pago: client.latest_pay,
    Estado: client.status,
    Observaciones: client.meta
  }));



  function new_sheet_of_clients(sheet_name, data){
    const hoja = xlsx.utils.json_to_sheet(transform_clients_before_to_excel(data));
    hoja['!cols'] = [{width: 5}, {width: 35}, {width: 12}, {width: 15}, {width: 40}, {width: 20}, {width: 12}, {width: 20}];
    xlsx.utils.book_append_sheet(libro, hoja, sheet_name);
  }

  function compose_clients (){
    return clients_paid.map(client => {
      const pay_for_this_client = pays_this_period.filter(pay => client.id === pay.id_client)[0];
      client.place_to_paid = pay_for_this_client.place;
      return client;
    })
  }

  function handleClick (){
    new_sheet_of_clients('Lista de clientes', props.clients);
    new_sheet_of_clients('Pagados', clients_paid);
    new_sheet_of_clients('No pagados', client_not_paid);
    create_sheets_from_places_to_paid();
    xlsx.writeFile(libro, `${period_now.toUpperCase()}.xlsx`);
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

  function create_sheets_from_places_to_paid(){
    const places_with_data = split_clients_for_place_to_paid();
    Object.keys(places_with_data).map(place_name => {
      new_sheet_of_clients(place_name, places_with_data[place_name]);
    })
  }

  return (
    <Container>
      hello reports
      <button onClick={handleClick}>generar xls</button>
    </Container>
  )
}

export default View;
