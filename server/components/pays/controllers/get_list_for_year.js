import store from '../store';

async function get_list_for_year(request, response){
  const year = request.params.year;

  const list_pays = await store.get_list_for_year(year);

  response.success({payload: list_pays});
}

export default get_list_for_year;
