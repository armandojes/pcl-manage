function response_middleware (request, response, next){
  response.error = (data = {}, status_code = 500) => {
    response.status(status_code);
    response.json({
      error: data.error || true,
      error_message: data.message || 'error interno del servidor',
      data: data.data || {},
      status: data.status || 'OK'
    });
  }
  response.success = (data = {}, status_code = 200) => {
    response.status(status_code);
    response.json({
      error: data.error || false,
      error_message: data.message || '',
      data: data.data || {},
      status: data.status || 'Internal Server Error'
    });
  }
  next();
}

export default response_middleware;
