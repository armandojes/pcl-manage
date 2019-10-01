import store from '../store';

async function list (request, response) {
  const Store = new store();
  const list_of_clients = await Store.list();
  response.success({payload: list_of_clients});
}

export default list;
