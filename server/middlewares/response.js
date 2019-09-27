function response (request, response, next){
  response.success = function (data = {}, code = 200){
    response.status(code);
    response.json({
      error: data.error || false,
      error_message: data.error_message || '',
      payload: data.payload || {},
      status: data.status || 'OK',
    });
  }
  response.error = function (data = {}, code = 500){
    response.status(code);
    response.json({
      error: data.error || true,
      error_message: data.error_message || 'Error interno del servidor',
      payload: data.payload || {},
      status: data.status || 'Internal Server Error',
    });
  }
  
  next();
}

export default response;
