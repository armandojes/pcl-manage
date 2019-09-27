function success (data = {}){
  return {
    error: data.error || false,
    error_message: data.error_message || '',
    payload: data.payload || {},
    status: data.status || 'OK'
  }
}

function error (data = {}){
  return {
    error: data.error || true,
    error_message: data.error_message || 'error interno del servidor',
    payload: data.payload || {},
    status: data.status || 'Internal Server Error'
  }
}

export default {success, error};
