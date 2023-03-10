const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseWebpack = {
  entry: {
    index: './src/ts/index.ts',
  },
  output: {
    filename: 'js/[name]_[contenthash:4].js',
    path: resolve(__dirname, '../dist'),
  },
  optimization: {
    usedExports: true,
  },

  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },

  // 修改 webpack 默认性能检测
  performance: {
    hints: 'warning',
    maxAssetSize: 2000 * 1024, // 整数类型（以字节为单位）
    maxEntrypointSize: 2000 * 1024, // 整数类型（以字节为单位）
  },
  // 文件大小检测

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|ttf|woff2?|svg|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name].[ext]',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        type: 'javascript/auto',
        options: {
          name: 'static/imgs/[name].[ext]',
          limit: 8 * 1024,
          esModule: false,
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      title: 'Nice',
      chunks: ['index'],
      chunksSortMode: 'manual',
      favicon: resolve(__dirname, '../src/assets/imgs/favicon.ico'),
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
};

module.exports = baseWebpack;
