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

export default {
  client,
}
