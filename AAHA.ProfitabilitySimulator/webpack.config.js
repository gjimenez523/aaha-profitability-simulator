const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: 'development',
  //mode: 'production',
  entry: { 'main': './wwwroot/js/app.js' },
  output: {
    path: path.resolve(__dirname, 'wwwroot/dist'),
    filename: 'aaha.profitability-simulator.js',
    //filename: 'aaha.profitability-simulator.min.js',
    publicPath: 'dist/'
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'aaha.profitability-simulator.css',
        //filename: 'aaha.profitability-simulator.min.css',
        minimize: true
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    })
    ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
    })
    ]
  },
  module: {
    rules: [ 
        { test: /\.css$/, use: [ { loader: MiniCssExtractPlugin.loader, options: { minimize: true,  } }, "css-loader"] },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: { loader: 'url-loader?limit=100000', } },
        { test: /\.js?$/,  use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
        { test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',    // where the fonts will go
             publicPath: '../'       // override the default path
           }
         }] 
        }
    ]
  }
};