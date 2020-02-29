const merge = require('deepmerge')
const path = require('path');
const config = require('../../webpack.config');

const webpackConfig = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
  }
}

module.exports = merge(config, webpackConfig);