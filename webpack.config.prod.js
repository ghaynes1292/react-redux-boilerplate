const baseConfig = require('./webpack.config.base.js');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: baseConfig.output,
  module: {
    rules: baseConfig.rules,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new webpack.optimize.UglifyJsPlugin({ mangle: false }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
