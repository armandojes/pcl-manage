import store from '../store';

async function update(request, response){

  const data = request.body;

  const state = await store.update(data.id, {
    name: data.name,
    adress: data.adress,
    number: data.number,
    cost: data.cost,
    status: data.status,
  });

  if (state){
    response.success();
  }
  else {
    response.error();
  }
}

export default update;
