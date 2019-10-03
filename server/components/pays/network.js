import { Router as router } from 'express';
import listall from './controllers/listall';

const Router = router();

Router.get('/', listall);

export default Router;
