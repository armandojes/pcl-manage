import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import View from './view';
import { fetch_clients } from '../../redux/clients';
import { fetch_pays } from '../../redux/payments';
import SessionHoc from '../../helpers/session_hoc';
import LoadingPage from '../../components/loading_page'
import Success from '../../components/success'
import Error from '../../components/error'
import moment from '../../helpers/moment.js';
import api from '../../api';

function Collect (props){

  const month = props.match.params.month || null;
  const period  = month ? moment.number_month_to_period(month) : moment.get_period();


  const [surcharge, set_surcharge] = useState(get_surcharge());
  const [view_surcharge, set_view_surcharge] = useState('display'); // display || form
  const [view, set_view] = useState('panel'); //panel || loading || success || error

  useEffect(() => {!props.client && props.fetch_clients();},[])

  function get_surcharge(){
    const day = moment.get_day_of_month();
    return day > 5 ? 100 : 0;
  }

  function cancel_surcharge(){
    set_surcharge(0);
  }

  function mod_surcharge (){
    set_view_surcharge('form');
  }

  function update_surcharge (){
    set_view_surcharge('display');
  }

  function handleChange(event){
    set_surcharge(parseInt(event.target.value || 0));
  }

  async function handleCollect (){
    const data = {
      surcharge: surcharge,
      id_client: props.client.id,
      cost: props.client.cost,
      period,
      actual_period: moment.get_period(),
      date: moment.get_date(),
      year: moment.get_year(),
    }
    set_view('loading');
    const response = await api.pay.collect(data);

    props.fetch_clients();
    if (! response.error) props.fetch_pays(moment.get_year());

    response.error
    ? set_view('error')
    : set_view('success');

  }


  if (props.client && view === 'panel') return (<View
    {...props.client}
    local={props.session.name}
    surcharge={surcharge}
    total={props.client.cost + surcharge}
    view_surcharge={view_surcharge}
    cancel_surcharge={cancel_surcharge}
    mod_surcharge={mod_surcharge}
    handleChange={handleChange}
    update_surcharge={update_surcharge}
    period={period}
    handleCollect={handleCollect}
  />);

  if (view === 'success') return (
    <Success
      message="Pago registrado correctamente"
    />
  )
  if (view === 'error') return (
    <Error
      message="Error interno del servidor"
    />
  )

  return (<LoadingPage {...props.client}/>);
}




const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const clients = state.clients.items;
  const client_select = clients.filter( client => client.id == id )[0] || null;

  return {
    loading: state.clients.loading,
    client: client_select,
  }
}

export default connect(mapStateToProps, {fetch_clients, fetch_pays })(SessionHoc(Collect));
