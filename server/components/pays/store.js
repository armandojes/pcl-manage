import database from '../../modules/database';
import clients_store from  '../clients/store';

class Store {

  async get_list_for_year (year) {
    const Pays = new database('pays');
    Pays.where('year', year);
    const list_of_pays = await Pays.fetch_list();
    return list_of_pays.error
    ? []
    : list_of_pays.data;
  }

  async is_period_paid(id_client, period){
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

  async get_latest_pay(id_client){
    const Clients = new database('clients');
    Clients.where('id', id_client);
    Clients.limit(1);
    const result = await Clients.fetch_single(['latest_pay']);
    return result.data.latest_pay || null;
  }
}

export default new Store;
