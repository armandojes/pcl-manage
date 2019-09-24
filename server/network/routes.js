import users from '../components/users/network';

const routes = (server) => {
  server.use('/users', users);
}


export default routes;
