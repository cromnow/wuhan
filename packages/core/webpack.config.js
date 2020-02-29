const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonConfigWebpackPlugin = require('common-config-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const config = require('../../webpack.config');

const webpackConfig = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'assets', 'index.html'),
    }),
  ]
}

module.exports = merge(config, webpackConfig);