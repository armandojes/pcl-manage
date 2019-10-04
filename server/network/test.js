import store from '../components/clients/store';
import databse from '../modules/database';
import moment from '../modules/moment';



async function Test (reques, response){
  const period_now = moment.get_period(1);

  const Clients = new databse('clients');
  Clients.update({latest_pay: period_now});
  response.send('OK');
}

export default Test;
