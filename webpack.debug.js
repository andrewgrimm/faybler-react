const { EnvironmentPlugin } = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');

/*  Unable to merge webpack.prod.js into this file as the typescript loader in webpack.common.js
    throws an error. For some reason it tries to parse the compiled javascript. I have tried using
    failOnError: false option with no success.
    Environment Variables are required to be set manually as they are usually set by the continuous
    integration build script when used in prod */

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
    new EnvironmentPlugin(['HOST']),
  ],
});
