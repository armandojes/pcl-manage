import api from '../api';

function set_clients (payload){
  return {
    type: 'SET_CLIENTS',
    payload,
  }
}

function load_clients (){
  return {
    type: 'LOAD_CLIENTS',
  }
}

// a s s y n c   a c t i o n s
export const fetch_clients = () => (dispatch) => {
  dispatch(load_clients());
  const response = api.client.get_list();
  dispatch(set_clients(response.payload));
}

//reducers
function reducer (state = {}, action){

  switch (action.type){
    case 'SET_CLIENTS':
    return {
      items: [],
      loading: true,
    }
    break;

    case 'LOAD_CLIENTS':
    return {
      items: action.payload,
      loading: false,
    }
    break;

    default:
    return state;
  }
}

export default reducer;
