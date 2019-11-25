/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');
const prod = require('./webpack.prod');

/*  Environment Variables are required to be set manually as they are usually set by the continuous
    integration build script when used in prod */

module.exports = merge.smart(common, prod, {
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
});
