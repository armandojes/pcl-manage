import { Router } from 'express';
import database from '../../modules/database';

const router = Router();

router.get('/', async (request, response) => {
const Database = new database('places');
Database.order_by('id', 'DESC');
Database.limit(5,5);
const result = await Database.fetch_list();
response.send(result);

})

router.get('/create', (request, response) => {
  const Database = new database('places');
  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  data.map ((item) => {
    Database.create({name: `test ${item}`, meta: '{`test ${item}}'});
  })

  response.send('response')
})

router.get('/delete', async (request, response) => {
  const Database = new database('places');
  Database.where('meta','{`test ${item}}');
  Database.limit(7);

  const result = await Database.delete();
  console.log(Database.SQL)
  response.send(result)
})

export default router;
