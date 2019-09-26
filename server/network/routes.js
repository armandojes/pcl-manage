import users from '../components/users/network';
import response_middleware from './response_middleware';

const routes = (server) => {
  server.use(response_middleware);
  server.use('/users', users);

  server.get('/', (request, response) => {
    response.success();
  })
}


export default routes;
