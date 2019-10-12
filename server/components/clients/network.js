import { Router } from 'express';
import list from './controllers/list';
import create from './controllers/create';
import update from './controllers/update';
import { autenticated } from '../../middlewares/security';

const router = Router();

router.get('/', list);
router.post('/create', autenticated, create);
router.post('/update', autenticated, update);


export default router;
