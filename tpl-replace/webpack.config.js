const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: resolve(__dirname, './dist/'),
  },
};
