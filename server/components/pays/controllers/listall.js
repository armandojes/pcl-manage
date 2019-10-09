import store from '../store';

async function listall(request, response){

  const list_pays = await store.get_list();

  response.success({payload: list_pays});
}

export default listall;
