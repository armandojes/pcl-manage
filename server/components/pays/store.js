import database from '../../modules/database';
import clients_store from  '../clients/store';

class Store {

  async get_list () {
    const Pays = new database('pays');
    const list_of_pays = await Pays.fetch_list();
    return list_of_pays.error
    ? []
    : list_of_pays.data;
  }

  async is_paid(id_client, period){
    const pays = new database('pays');
    pays.where('id_client', id_client);
    pays.where('period', period);
    const result = await pays.fetch_single(['id']);
    return result.data ? true : false;
  }

  async update_latest_pay(id_client,period){
    const state = await clients_store.update_latest_pay(id_client, period);
    return state;
  }

  async save(data){
    const pays = new database('pays');
    const result = await pays.create(data);
    return result.id;
  }
}

export default new Store;
