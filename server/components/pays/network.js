import { Router as router } from 'express';
import { autenticated, admin } from '../../middlewares/security';
import get_list_for_year from './controllers/get_list_for_year';
import collect from './controllers/collect';

const Router = router();

Router.get('/:year', autenticated, get_list_for_year);
Router.post('/collect',admin, collect);

export default Router;
