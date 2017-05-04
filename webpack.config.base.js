const path = require('path');

module.exports = {
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      ],
    },
  ]
};
