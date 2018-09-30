const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { join } = path;
const { readdirSync, existsSync } = fs;

const jsSourcePath = join(__dirname, 'example');
const libSourcePath = join(__dirname, 'src');
const buildLib = join(__dirname, 'build/lib');
const buildDist = join(__dirname, 'build/dist');

// Lib common plugins
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    // filename: 'vendor-[hash].js',
    filename: 'verdor.js',
    minChunks(module) {
      const context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    },
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new CleanWebpackPlugin(['build/dist', 'build/lib']),
  new BundleAnalyzerPlugin(),
  // new ExtractTextWebpackPlugin('react-mui.css')
];

const distPlugins = [
  ...plugins,
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
  }),
];

// Rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  }, {
    test: /\.css/,
    // use: ExtractTextWebpackPlugin.extract({
    //   fallback: 'style-loader',
    use: [
      'style-loader',
      { loader: 'css-loader', options: { sourceMap: true } },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
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
    // })
  }, {
    test: /\.less$/,
    exclude: /node_modules/,
    // use: ExtractTextWebpackPlugin.extract({
    //   fallback: '',
    use: [
      'style-loader',
      { loader: 'css-loader', options: { sourceMap: true } },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
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
          sourceMap: true
        }
      }
    ]
    // })
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
  }
];

// Components path
const libEntry = (() => {
  const result = {};
  const componentsPath = join(__dirname, './src/components');
  readdirSync(componentsPath).forEach((name) => {
    const dir = join(componentsPath, name);
    const jsFilePath = join(dir, './index.js');
    if (existsSync(jsFilePath)) {
      result[name] = jsFilePath;
    }
  });
  return result;
})();

// Common config exclude entry and output
const webpackConfig = {
  devtool: 'source-map',
  context: libSourcePath,
  externals: {
    'react': 'react',
    'react-dom': 'ReactDOM'
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
};

module.exports = [
  // dist uglify
  {
    ...webpackConfig,
    entry: ['./index.js'],
    output: {
      path: buildDist,
      publicPath: '',
      filename: 'react-mui.min.js',
      library: 'react-mui',
      libraryTarget: 'umd',
    },
    plugins: distPlugins,
  },
  // dist
  {
    ...webpackConfig,
    entry: ['./index.js'],
    output: {
      path: buildDist,
      publicPath: '',
      filename: 'react-mui.js',
      library: 'react-mui',
      libraryTarget: 'umd',
    },
    plugins,
  },
  // lib
  {
    ...webpackConfig,
    entry: libEntry,
    output: {
      path: buildLib,
      publicPath: '',
      filename: '[name]/index.js',
      library: 'react-mui',
      libraryTarget: 'umd',
    },
    plugins,
  },
];
