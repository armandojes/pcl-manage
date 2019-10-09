import axios from 'axios';

async function connect (config){
  config.url = `${API}${config.url}`
  config.method = config.method || 'get';
  const response = await axios(config);
  return response.data;
}

const client = {
  get_list() {
    return connect({url: '/clients'});
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
      url: '/pay/collect',
      method: 'post',
      data,
    });
  }
}

export default {
  client,
  login,
  pay,
}
