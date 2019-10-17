import express from 'express';
import routes from './network/routes';
import response from './middlewares/response';

//server statics
const server = express();
server.use('/public', express.static('public'));
server.use(express.json());
server.use(response);

routes(server);
server.listen(3001);
