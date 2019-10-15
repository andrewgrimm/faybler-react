
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

const distPath = path.join(__dirname,'dist');

module.exports = () => {
  return {
    entry: './src/index.jsx',
    output: {
      path: distPath,
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          resolve: { extensions: [".js", ".jsx"] },
          exclude: /node_modules/,
          use: ['babel-loader','eslint-loader']
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    generateStatsFile: true,
    statsOptions: { source: false }
  })
    ],
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: distPath,
      historyApiFallback: true,
      compress: true,
      port: 9000
    }
  };
}
