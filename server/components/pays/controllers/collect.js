import store from '../store';

async function Collect  (request, response) {

  const session = request.body.session;
  const payload = request.body;
  const is_paid = await store.is_paid(payload.id_client, payload.period);

  if (is_paid){
    response.error({
      error_message: 'El cliente ya ha pagado',
      status: 'Error'
    });
    return false;
  }

  const meta = payload.surcharge
  ? JSON.stringify({surcharge: payload.surcharge})
  : '{}'

  await store.update_latest_pay(payload.id_client, payload.period);

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
