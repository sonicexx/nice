const baseWebpack = require('./webpack.base');
const { merge } = require('webpack-merge');

const devWebpack = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    host: 'localhost',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = merge(baseWebpack, devWebpack);
