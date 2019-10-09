import store from '../store';

async function list (request, response) {
  const list_of_clients = await store.list_all();
  response.success({payload: list_of_clients});
}

export default list;
