import store from '../components/clients/store';
import databse from '../modules/database';
import moment from '../modules/moment';



async function Test (reques, response){
  const period_now = moment.get_period();

  const Clients = new databse('clients');
  Clients.update({latest_pay: 'septiembre 2019'});
  response.send('OK');
}

export default Test;
