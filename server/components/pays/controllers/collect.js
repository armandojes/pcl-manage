import store from '../store';
import moment from '../../../modules/moment'

async function Collect  (request, response) {

  //definir variables
  const session = request.body.session;
  const payload = request.body;
  const is_period_paid = await store.is_period_paid(payload.id_client, payload.period);
  const latest_pay = await store.get_latest_pay(payload.id_client);
  const is_after = moment.is_after(payload.period, latest_pay);
  const is_after_actual_period = moment.is_after(payload.period, payload.actual_period);

  //si el periodo esta pagado responder con error
  if (is_period_paid){
    return response.error({
      error_message: 'El cliente ya ha pagado',
      status: 'Error'
    });
  }

  //responder con un error al intentar pagar un periodo adelantado
  if (is_after_actual_period){
    return response.error({
      error_message: 'No puedes pagar un periodo adelantado',
      status: 'Error'
    });
  }

  //actualiza solo si el mes es mas actual.
  if (is_after || latest_pay === 'pending'){
    await store.update_latest_pay(payload.id_client, payload.period);
  }


  // transform meta to json
  const meta = payload.surcharge
  ? JSON.stringify({surcharge: payload.surcharge})
  : '{}'

  const id_created = await store.save({
    id_client: payload.id_client,
    id_place: session.id,
    place: session.name,
    cost: payload.cost,
    period: payload.period,
    date: payload.date,
    year: payload.year,
    meta,
  });

  response.success({payload: {
    id_created,
  }});
}

export default Collect;
