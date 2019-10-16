import moment from '../helpers/moment';

function usePaid (client){
  if (!client.id) return false;
  const client_period = client.latest_pay;
  const actual_period = moment.get_period();
  if (actual_period === client_period) return true;
  if ((actual_period != client_period) && (client_period != 'pending')) return false;
  const registered = client.meta.date || null;
  if (!registered) return false;
  var period_register = registered.split(' ').slice(2).join(' ');
  if (period_register === actual_period) return 'new'
  return false;
}

export default usePaid;
