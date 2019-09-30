import api from './api';
import Layout from '../layout';

const routes = (server) => {

  server.use('/api', api);
  server.get('*', (request, response) => {
    response.send(Layout());
  })

}


export default routes;
