import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import initial_state from './initial_state';
import reducer from './reducer';
import session_persist from './redux/moddlewares/session_persist'
import session_loader from './helpers/session_loader';

const enhancer = IS_PRODUCTION
? applyMiddleware(ReduxThunk,session_persist)
: composeWithDevTools(applyMiddleware(ReduxThunk,session_persist, logger));

const session = session_loader(initial_state.session);
initial_state.session = session;

//creando store
const store = createStore(
  reducer,
  initial_state,
  enhancer,
);

export default store;
