import clients from '../components/clients/network';
import login from '../components/login/network';
import pays from '../components/pays/network';
import { Router as router } from 'express';
import test from './test';

const api = router();
api.get('/test', test);
api.use('/clients', clients);
api.use('/login', login);
api.use('/pays', pays);


export default api;
