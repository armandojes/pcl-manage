const server =  require('./webpack/webpack.server.config.js');
const client =  require('./webpack/webpack.client.config.js');
const electron =  require('./webpack/webpack.electron.config.js');

module.exports = [
  server,
  client,
  electron,
];
