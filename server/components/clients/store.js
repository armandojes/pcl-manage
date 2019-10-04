import database from '../../modules/database';

class Clients {
  async list (){
    const clients = new database('clients');
    clients.order_by('name', 'ASC');
    const list_of_clients = await clients.fetch_list();

    return list_of_clients.data;
  }


}

export default Clients;
