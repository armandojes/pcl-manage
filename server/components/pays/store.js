import database from '../../modules/database';

class Store {
  async get_list () {
    const Pays = new database('pays');
    const list_of_pays = await Pays.fetch_list();
    return list_of_pays.error
    ? []
    : list_of_pays.data;
  }
}

export default Store;
