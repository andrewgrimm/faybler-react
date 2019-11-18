const merge = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const common = require('./webpack.common.js');

// this is used for the deployment to both the dev server and prod server but not for running on localhost.

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new EnvironmentPlugin(['HOST']),
  ],
});
