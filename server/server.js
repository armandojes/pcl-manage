import express from 'express';
import routes from './network/routes';
import response from './middlewares/response';
import cors from 'cors';

//server statics
const server = express();
server.use('/public', express.static('public'));
server.use(express.json());
server.use(cors());
server.use(response);

routes(server);
server.listen(3001);
