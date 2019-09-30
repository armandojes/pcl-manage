import users from '../components/users/network';
import login from '../components/login/network';
import { Router } from 'express';


const api = Router();
api.use('/users', users);
api.use('/login', login);


export default api;
