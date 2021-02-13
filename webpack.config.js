const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
//const CompressionPlugin = require("compression-webpack-plugin");
//var HtmlWebpackPreconnectPlugin = require('html-webpack-preconnect-plugin')

module.exports = {
  entry: {
  app: path.resolve(__dirname, './src/app.js'),
  job: path.resolve(__dirname, './src/job.js'),
  abilities: path.resolve(__dirname, './src/abilities.js'),
  passives: path.resolve(__dirname, './src/passives.js'),
  glossary: path.resolve(__dirname, './src/glossary.js'),
  characters: path.resolve(__dirname, './src/characters.js'),
},
output: {
  filename: '[name].[contenthash]bundle.js',
//  path: path.resolve(__dirname, 'deploy'),
  path: '/newjobm/',
},
//optimization: {
//  runtimeChunk: 'single',
//},
devServer: {
  contentBase: './deploy',
  compress: true,
//  open: true,
},
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.(ico|jpg|JPG|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: {
        loader: 'file-loader',
        options: {

          esModule: false,
        },
      },
    },
    {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(?:ico|gif|png|PNG)$/i,
      type: 'asset/resource',
    },
  ],
},
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
      filename: 'index.html',
      chunks: ['app',],
  //    inject: false ,
    //  preconnect: [
    //    'https://docs.google.com/spreadsheets/d/1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g/edit?usp=sharing',
    //  ]
    }),
    new HtmlWebpackPlugin({
      filename: 'job.html',
      chunks: ['job'],
    //  inject: false ,
    }),
    new HtmlWebpackPlugin({
      filename: 'abilities.html',
      chunks: ['abilities'],
    }),
    new HtmlWebpackPlugin({
      filename: 'passives.html',
      chunks: ['passives'],
    }),
    new HtmlWebpackPlugin({
      filename: 'glossary.html',
      chunks: ['glossary'],
    }),
    new HtmlWebpackPlugin({
      filename: 'characters.html',
      chunks: ['characters'],
    }),
    /*new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    })*/
  ],
};
