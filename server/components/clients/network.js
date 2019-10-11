import { Router } from 'express';
import list from './controllers/list';
import create from './controllers/create';
import { autenticated } from '../../middlewares/security';

const router = Router();

router.get('/', list);
router.post('/create', autenticated, create);

export default router;
