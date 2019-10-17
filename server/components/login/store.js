import database from '../../modules/database';

class Login {

  async login ({password, user}){
    const db_places = new database('places');
    db_places.where('user', user);
    db_places.where('password', password);
    const result = await db_places.fetch_single(['id', 'meta', 'user', 'name']);
    return result.data || false;
  }

}

export default Login;
