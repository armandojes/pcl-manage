function session_loader (state) {

  if (typeof(Storage) === 'undefined') return state;

  const session = localStorage.getItem('session');
  return session
  ? JSON.parse(session)
  : state
}

export default session_loader;
