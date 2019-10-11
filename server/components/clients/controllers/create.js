import store from '../store';

async function create (request, response) {

  const data = request.body;
  const session = request.body.session;

  const id_created = await store.save({
    name: data.name,
    adress: data.adress,
    cost: data.cost,
    number: data.number,
    meta: JSON.stringify({place: session.name}),
  });

  response.success({payload: {
    id: id_created,
  }});
}

export default create;
