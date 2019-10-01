import clients from '../components/clients/network';
import login from '../components/login/network';
import { Router } from 'express';


const api = Router();
api.use('/clients', clients);
api.use('/login', login);


export default api;
