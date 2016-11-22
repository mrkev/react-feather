var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};