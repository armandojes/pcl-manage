import { Router } from 'express';
import list from './controllers/list';
import create from './controllers/create';
import update from './controllers/update';
import { autenticated, admin } from '../../middlewares/security';

const router = Router();

router.get('/', list);
router.post('/create', admin, create);
router.post('/update', admin, update);


export default router;
