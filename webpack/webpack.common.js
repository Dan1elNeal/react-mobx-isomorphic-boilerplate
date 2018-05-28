const path = require('path');
const config = require('config');

const { url } = config.get('host');

module.exports = {
  entry: ['./src/client/index.jsx'],
  output: {
    path: path.join(__dirname, '../public/static/build/'),
    filename: 'main.js',
    publicPath: `${url}/static/build/`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /public/]
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx'] }
};
