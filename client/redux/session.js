function reducer (state = {}, action = {}){
  switch (action.type){
    case 'SET_SESSION':
    return Object.assign({}, state, payload);
    break;

    case 'LOAD_SESSION':
    return Object.assign({}, state, payload);

    default:
    return state;
  }

}

export default reducer;
