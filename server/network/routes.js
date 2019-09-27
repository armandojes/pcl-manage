import users from '../components/users/network';
import login from '../components/login/network';


const routes = (server) => {

  server.use('/users', users);
  server.use('/login', login);

  server.get('/', (request, response) => {
    response.send('error404');
  })
}


export default routes;
