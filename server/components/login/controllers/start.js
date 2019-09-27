import { sign } from 'jsonwebtoken';
import {jsonwebtoken} from '../../../config';

function start (request, response){
  const  data = {
    name: 'armando de jesus',
    id: 1
  }
  const access_token = sign(data, jsonwebtoken.key, { expiresIn:  jsonwebtoken.session_time});

  response.success({data: {access_token}});
}

export default start;
