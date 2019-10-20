import axios from 'axios';
var access_token = false;

export function instance_access_token(store){
  const state = store.getState();
  access_token = state.session.access_token;
}

async function connect (config){
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
  get_all(){
    return connect({
      url: '/pays'
    });
  }
}

export default {
  client,
  login,
  pay,
}
