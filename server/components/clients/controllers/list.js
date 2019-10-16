import store from '../store';

async function list (request, response) {
  var list_of_clients = await store.list_all();
  list_of_clients = list_of_clients.map(client => {
    return {
      ...client,
      meta: JSON.parse(client.meta)
    }
  })

  response.success({payload: list_of_clients});
}

export default list;
