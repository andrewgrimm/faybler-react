const merge = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

const distPath = path.join(__dirname, 'dist');

module.exports = merge.smart(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        use: ['eslint-loader'],

      }
    ],
  },
  plugins: [
    new EnvironmentPlugin({ HOST: 'localhost:8000' }),
  ],
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    compress: true,
    port: 8000,
    proxy: {
      '**': 'http://localhost:9000',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  devtool: 'cheap-eval-source-map',
});
