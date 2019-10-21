import store from '../store.js';
import {verify, sign} from '../../../modules/security';


async function start (request, response){
  const Store = new store();

  const credential = {
    user: request.body.user || '',
    password: request.body.password || '',
  }
  const result = await Store.login({
    user: request.body.user || '',
    password: request.body.password || '',
  });

  

  if (result){
    response.success({
      payload: {
        ...result,
        token: sign(result),
      }
    });
  }
  else {
    response.error({
      error_message: 'usuario o conytraseña incorrectos',
      status: 'Forbidden',
    },200);
  }
}

export default start;
