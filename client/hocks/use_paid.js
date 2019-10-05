import moment from '../helpers/moment';

function usePaid (client_period){
  const moment_now = moment.get_period();
  const is_paid = moment_now === client_period;
  
  return is_paid;
}

export default usePaid;
