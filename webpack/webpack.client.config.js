const path = require('path');
const webpack = require('webpack');
const extract = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const config = {
  entry: ["regenerator-runtime/runtime", path.resolve(__dirname, '../client/client.js')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/(node_modules)/",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [extract.loader, {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['es-us'],
    }),
    new extract({
      filename: "styles.css"
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION: process.env.NODE_ENV === 'production' ? true : false,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      BASEURL: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://pcl.now.sh' : 'http://localhost:3001'),
      ASSETS: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://pcl.now.sh/public' : 'http://localhost:3001/public'),
      API: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://pcl.now.sh/api' : 'http://localhost:3001/api'),
    })
  ],
  target: 'web',
}


module.exports = config;
