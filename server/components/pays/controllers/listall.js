import store from '../store';

async function listall(request, response){
  const Store = new store();
  const list_pays = await Store.get_list();
  
  response.success({payload: list_pays});
}

export default listall;
