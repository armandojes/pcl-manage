import database from '../../modules/database';

class Clients {

  async list_all (){
    const clients = new database('clients');
    clients.order_by('name', 'ASC');
    const list_of_clients = await clients.fetch_list();
    return list_of_clients.data;
  }

  async update_latest_pay(id_client, period){
    const clients = new database('clients');
    clients.where('id', id_client);
    const result = await clients.update({latest_pay: period});
    return result.state;
  }

  async save(data){
    const clients = new database('clients');
    const result = await clients.create({
      latest_pay: 'pending',
      status: 'activo',
      ...data
    });
    return result.id;
  }

  async update(id, data){
    const clients = new database('clients');
    clients.where('id', id);
    const result = await clients.update(data);

    return result.state;
  }

}

export default new Clients;
