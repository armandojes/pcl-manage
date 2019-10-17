import store from '../components/clients/store';
import databse from '../modules/database';
import moment from '../modules/moment';
import clients from '../clients'

async function Test (reques, response){
  const clientsDB = new databse('clients');
  var client;
  for (let index = 0; index < clients.length; index++){
    client = clients[index];
    const data = {
      ...client,
      latest_pay: 'pending',
      status: 'activo',
      meta: '{}',
    }
    const state = await clientsDB.create(data);
    console.log(state);
    console.log(index);
  }

  console.log(clients.length);
  response.send('OK');
}

export default Test;
