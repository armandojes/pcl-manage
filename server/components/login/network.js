import { Router } from 'express';
import {admin, autenticated} from '../../middlewares/security';

import start from './controllers/start'

const login = Router();


login.post('/start',start);


export default login;
