import api from '../api'

//actions
export const fetch_pays = (year) => async(dispatch) => {
  dispatch(load_payments());
  const response = await api.pay.get_all(year);
  dispatch(set_payments(response.payload))
}


function set_payments (payload){
  return {
    type: 'SET_PAYMENTS',
    payload,
  }
}

function load_payments (){
  return {
    type: 'LOAD_PAYMENTS',
  }
}

//reducers
function reducer (state = {}, action){

  switch (action.type){
    case 'LOAD_PAYMENTS':
    return {
      items: [],
      loading: true,
    }
    break;

    case 'SET_PAYMENTS':
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
