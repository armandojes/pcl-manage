import { verify } from '../modules/security';
import { jsonwebtoken } from '../config';

function extract_access_token (request) {
  var access_token = request.headers.authorization || '';
  access_token = access_token.split(' ');
  access_token = access_token[0] === 'Bearer' ? access_token[1] : null;
  return access_token;
}

const response_not_autenticated = (response) => {
  response.error({
    error_message: 'autenticacion necesaria!',
    status: 'Unauthorized',
  },401);
}

export async function autenticated (request, response, next){
  const access_token = extract_access_token(request);
  const decoded = await verify(access_token);
  if (!decoded) response_not_autenticated(response);
  else next();
}

export async function admin (request, response, next){
  const access_token = extract_access_token(request);
  const decoded = await verify(access_token)

  if (!decoded) {
    response_not_autenticated(response);
    return false;
  }

  if (!decoded.admin){
    response.error({
      error_message: 'no tienes permisos sificientes',
      status: 'Forbidden',
    },403);
    return false;
  }

  next();
}

export default {
  autenticated,
  admin,
}
