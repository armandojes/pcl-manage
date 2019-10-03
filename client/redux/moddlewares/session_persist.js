const session_persist = store => next => action => {

  if (action.type === 'SET_SESSION'){
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('session', JSON.stringify(action.payload))
    }
  }
  next(action);
}

export default session_persist;
