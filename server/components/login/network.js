import { Router } from 'express';

import start from './controllers/start'

const login = Router();


login.post('/start',start);


export default login;
