import { Router } from 'express';
import start from './controllers/start'
import {jsonwebtoken} from '../../config';
import { verify } from 'jsonwebtoken';
import {admin, autenticated} from '../../middlewares/security'

const login = Router();


login.get('/logged', admin, function (request, response) {
  console.log('execute controller ');
  response.success('controller');
})


export default login;
