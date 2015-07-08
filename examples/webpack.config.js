var path = require('path');
var webpack = require('webpack');

var isDev = process.env.NODE_ENV !== 'production';

module.exports = {

  devtool: isDev ? 'cheap-eval-source-map' : 'source-map',

  entry: [
    path.join(__dirname, 'main.js')
  ].concat(isDev ? [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server'
  ] : []),

  output: {
    path: 'examples/__build__/',
    filename: '[name].js',
    publicPath: '/__build__/'
  },

  target: 'web',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: isDev ? ['react-hot', 'babel'] : ['babel']
      }
    ]
  },

  resolve: {
    alias: {
      '@vesparny/react-tabs': path.join(__dirname, '../src')
    }
  },

  plugins: [
		new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__DEV__': JSON.stringify(isDev || true)
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}
