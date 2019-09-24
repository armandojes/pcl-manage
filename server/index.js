import express from 'express';
const path = require('path');
import api from './api/network/router';

//server statics
const server = express();
server.use('/assets', express.static('public'));
server.use('/api', api);

server.get('*', function (request, response) {
  response.send('router primary');
});

server.listen(3001);
