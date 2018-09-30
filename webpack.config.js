const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { join } = path;

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const jsSourcePath = join(__dirname, 'example');
const buildPath = join(__dirname, 'build/example');
const sourcePath = join(__dirname, 'example');

// Common plugins
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].js',
    minChunks(module) {
      const context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    },
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  }, {
    test: /\.css/,
    loader: [
      'style-loader',
      { loader: 'css-loader', options: { sourceMap: !isProduction, importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: !isProduction,
          plugins: () => [
            autoprefixer({
              browsers: [
                'last 3 version',
                'ie >= 10',
                'iOS >= 7',
                'Android >= 4.1'
              ],
            })
          ]
        }
      }]
  }, {
    test: /\.less$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { sourceMap: !isProduction, importLoaders: 2 } },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: !isProduction,
          plugins: () => [
            autoprefixer({
              browsers: [
                'last 3 version',
                'ie >= 10',
                'iOS >= 7',
                'Android >= 4.1'
              ],
            })
          ]
        }
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: !isProduction
        }
      }
    ],
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
  }
];

if (!isProduction) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  );
  plugins.push(new CleanWebpackPlugin(['build/example']));
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  devtool: isProduction ? false : 'source-map',
  context: jsSourcePath,
  entry: {
    app: ['./app.js'],
  },
  output: {
    path: buildPath,
    publicPath: '',
    filename: '[name]-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.loader.js', '.js', '.jsx', '.less'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
    ],
  },
  plugins,
  devServer: {
    contentBase: isProduction ? buildPath : sourcePath,
    historyApiFallback: true,
    port: 8000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
    },
  },
};
