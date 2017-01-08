var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'index.jsx')
  ],
  // output: {
  //   path: path.join(__dirname, 'build'),
  //   filename: 'bundle.js',
  //   // publicPath: '/static/'
  // },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, '..'),
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader",
      include: path.join(__dirname, '..'),
    }]
  }
};


// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
//   devtool: 'cheap-module-source-map',
//   entry: [
//     'react-hot-loader/patch',
//     'webpack-hot-middleware/client',
//     './index.jsx'
//   ],
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'main.bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loaders: ['babel'],
//         // include: __dirname,
//         // query: {
//         //   presets: ["es2015", "react"]
//         // }
//       }
//     ]
//   },
//   stats: {
//     colors: true
//   },
//   plugins: [
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//   ],
// };
