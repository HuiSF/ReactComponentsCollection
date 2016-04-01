const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const common = {
  entry: {
    app: PATHS.app,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],

    // evaluate order: left->right it will try to find .js earlier than .jsx
  },
  output: {
    path: PATHS.build,
    filename: 'build.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app,
      }, {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app,
      },
    ],
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'error-only',
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
    ],
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
