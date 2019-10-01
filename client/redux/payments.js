//actions
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
    case 'SET_PAYMENTS':
    return {
      items: [],
      loading: true,
    }
    break;

    case 'LOAD_PAYMENTS':
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
