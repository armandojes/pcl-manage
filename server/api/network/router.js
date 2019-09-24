import { Router } from 'express';
const router = Router();


// define the home page route
router.get('/', function(req, res) {
  res.send('api home');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('api about');
});

export default router;
