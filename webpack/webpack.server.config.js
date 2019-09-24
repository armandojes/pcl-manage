const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ["regenerator-runtime/runtime", path.resolve(__dirname, '../server/server.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/(node_modules)/",
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_PRODUCTION: process.env.NODE_ENV === 'production' ? true : false,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      BASEURL: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://platzi-blog.now.sh' : 'http://localhost:3000'),
    })
  ],
  target: 'node',
}


module.exports = config;
