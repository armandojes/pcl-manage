import { verify } from '../modules/security';
import { jsonwebtoken } from '../config';

function extract_access_token (request) {
  var access_token = request.headers.authorization || '';
  access_token = access_token.split(' ');
  access_token = access_token[0] === 'Bearer' ? access_token[1] : null;
  return access_token;
}


function response_not_autenticated (response){
  response.error({
    error_message: 'autenticacion necesaria!',
    status: 'Unauthorized',
  },401);
}

function response_not_allowed (response){
  response.error({
    error_message: 'no tienes permisos sificientes',
    status: 'Forbidden',
  },403);
}

export async function autenticated (request, response, next){
  const access_token = extract_access_token(request);
  const token_decoded = await verify(access_token);


  if (!token_decoded) {
    response_not_autenticated(response);
    return false;
  };
  request.body.session = token_decoded;
  next();
}

export async function admin (request, response, next){
  const access_token = extract_access_token(request);
  const token_decoded = await verify(access_token);

  if (!token_decoded) {
    response_not_autenticated(response);
    return false;
  }

  if (!token_decoded.admin){
    response_not_allowed(response);
    return false;
  }
  request.body.session = token_decoded;
  next();
}

export default {
  autenticated,
  admin,
}
