const merge = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

const distPath = path.join(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new EnvironmentPlugin({ HOST: 'localhost:9000' }),
  ],
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    compress: true,
    port: 8000,
  },
  devtool: 'cheap-eval-source-map',
});
