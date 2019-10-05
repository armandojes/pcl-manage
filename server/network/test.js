import store from '../components/clients/store';
import databse from '../modules/database';
import moment from '../modules/moment';



async function Test (reques, response){
  const period_now = moment.get_period();

  const Clients = new databse('clients');
  Clients.limit(50);
  Clients.update({latest_pay: period_now});
  response.send('OK');
}

export default Test;
