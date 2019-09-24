import express from 'express';
import routes from './network/routes';

//server statics
const server = express();

server.use('/assets', express.static('public'));
routes(server);

server.get('*', function (request, response) {
  response.send('router primary');
});

server.listen(3001);
