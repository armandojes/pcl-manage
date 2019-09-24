import { Router } from 'express';
import connect from '../../modules/connect';

const router = Router();
const test = "guadalupe";
router.get('/', async (request, response) => {
  const result = await connect.query(`SELECT * FROM places WHERE name = ? `, [test]);
  response.json(result);
})

router.get('/push', (request, response) => {
  response.send('push');
})

export default router;
