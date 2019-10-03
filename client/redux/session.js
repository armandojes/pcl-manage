//actions
export function set_session (payload){
  return {
    type: 'SET_SESSION',
    payload: payload,
  }
}

//reducers
function reducer (state = {}, action = {}){
  switch (action.type){
    case 'SET_SESSION':
      return {
        ...state,
        ...action.payload
      };
      break;
    default:
      return state;
  }


}

export default reducer;
