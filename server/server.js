import express from 'express';
import routes from './network/routes';

//server statics
const server = express();

server.use('/assets', express.static('public'));
routes(server);

server.listen(3001);
