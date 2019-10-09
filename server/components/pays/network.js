import { Router as router } from 'express';
import {autenticated} from '../../middlewares/security';
import listall from './controllers/listall';
import collect from './controllers/collect';

const Router = router();

Router.get('/', autenticated, listall);
Router.post('/collect',autenticated, collect);

export default Router;
