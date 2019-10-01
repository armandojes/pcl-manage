import { combineReducers } from 'redux';
import clients from './redux/clients';
import session from './redux/session';
import payments from './redux/payments';

export default combineReducers({
  clients,
  session,
  payments,
});
