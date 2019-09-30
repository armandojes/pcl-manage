import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import initial_state from './initial_state';
import reducer from './reducer';

const enhancer = IS_PRODUCTION
? applyMiddleware(ReduxThunk)
: composeWithDevTools(applyMiddleware(ReduxThunk,logger));

//creando store
const store = createStore(
  reducer,
  initial_state,
  enhancer
);

export default store;
