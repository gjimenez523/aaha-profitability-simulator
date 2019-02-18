const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: { 'main': './wwwroot/source/app.js' },
  output: {
    path: path.resolve(__dirname, 'wwwroot/dist'),
    filename: 'aaha.profitability-simulator.js',
    publicPath: 'dist/'
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'aaha.profitability-simulator.css'
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(
    )]
  },
  module: {
    rules: [ 
        { test: /\.css$/, use: [{loader: MiniCssExtractPlugin.loader}, "css-loader"] },
        { test: /\.js?$/,  use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
    ]
  }
};