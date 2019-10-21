import axios from 'axios';
var get_state = false;

export function instance_access_token(store){
  get_state = store.getState;
}

async function connect (config){
  const access_token = get_state().session.access_token;
  if (access_token){
    config.headers = {
      'Authorization': 'Bearer ' + access_token,
    }
  }
  config.url = `${API}${config.url}`
  config.method = config.method || 'get';
  const response = await axios(config);
  return response.data;
}

const client = {
  get_list() {
    return connect({url: '/clients'});
  },
  create(data) {
    return connect({
      url: '/clients/create',
      method: 'post',
      data,
    });
  },
  update(data) {
    return connect({
      url: '/clients/update',
      method: 'post',
      data,
    });
  }
}


const login = {
  start(data) {
    return connect({
      url: '/login/start',
      method: 'post',
      data,
    });
  }
}

const pay = {
  collect(data){
    return connect({
      url: '/pays/collect',
      method: 'post',
      data,
    });
  },
  get_all(year){
    return connect({
      url: `/pays/${year}`
    });
  }
}

export default {
  client,
  login,
  pay,
}
