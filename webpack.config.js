const path = require('path');

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_TOOL = NODE_ENV === 'development' ? 'source-map' : false;
const ASSETS_PATH = path.join(__dirname, 'resources');

const publicFolder = path.resolve(__dirname, 'public');
const compileReactComponent = require('./resources/react');

const outputFilename = ({
  chunk: {
    name,
    entryModule: { id },
  },
}) => {
  if (id && typeof id === 'string' && id.match(/\/react\//g)) {
    return `assets/react/${name}.js`;
  }

  return 'assets/[name].js';
};

module.exports = {
  mode: NODE_ENV,
  devtool: DEV_TOOL,
  entry: {
    app: path.resolve(ASSETS_PATH, 'app.js'),
    ...compileReactComponent,
  },
  output: {
    path: publicFolder,
    filename: outputFilename,
    publicPath: '/',
  },
  devServer: {
    hot: true,
    contentBase: publicFolder,
    watchContentBase: true,
    progress: true,
    compress: true,
    port: 9000,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[name].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'global.$': 'jquery',
      'window.$': 'jquery',
      'global.jQuery': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/images/[name]-[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/svg/[name]-[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name]-[hash:8].[ext]',
        },
      },
      {
        enforce: 'pre',
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'eslint-loader',
      },
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: 'vue-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.vue', '.css', '.scss', '.sass'],
    alias: { vue: 'vue/dist/vue.esm.js' },
  },
};
