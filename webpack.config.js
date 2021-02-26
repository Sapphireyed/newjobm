const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
//const CompressionPlugin = require("compression-webpack-plugin");
//var HtmlWebpackPreconnectPlugin = require('html-webpack-preconnect-plugin')

module.exports = {
  entry: {
  home: path.resolve(__dirname, './src/home.js'),
  app: path.resolve(__dirname, './src/app.js'),
  job: path.resolve(__dirname, './src/job.js'),
  abilities: path.resolve(__dirname, './src/abilities.js'),
  passives: path.resolve(__dirname, './src/passives.js'),
  glossary: path.resolve(__dirname, './src/glossary.js'),
  characters: path.resolve(__dirname, './src/characters.js'),
  char: path.resolve(__dirname, './src/char.js'),
  chapters: path.resolve(__dirname, './src/chapters.js'),
  mats: path.resolve(__dirname, './src/mats.js'),
  gacha: path.resolve(__dirname, './src/gacha.js'),
  dungeonrules: path.resolve(__dirname, './src/gameMechanics/dungeonrules.js'),
},
output: {
  filename: '[name].[contenthash]bundle.js',
  path: path.resolve(__dirname, 'deploy'),
//  path: '/newjobm/',
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
      title: "Jobmania",
      filename: 'index.html',
      chunks: ['home',],
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Output",
      filename: 'jobs.html',
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
    new HtmlWebpackPlugin({
      filename: 'char.html',
      chunks: ['char'],
    }),
    new HtmlWebpackPlugin({
      filename: 'chapters.html',
      chunks: ['chapters'],
    }),
    new HtmlWebpackPlugin({
      filename: 'materials.html',
      chunks: ['mats'],
    }),
    new HtmlWebpackPlugin({
      filename: 'gacha.html',
      chunks: ['gacha'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dungeonrules.html',
      chunks: ['dungeonrules'],
    }),
    /*new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    })*/
  ],
  resolve: {
      fallback: {
        "util": require.resolve("util/"),
        "assert": require.resolve("assert/"),
        "https": false,
        "http": false,
        "stream": false,
        "crypto": false,
        "buffer": false,
        "zlib": false,
        "net": false,
        "tls": false,
        "fs": false,
        "path": false,
        "os": false,
        "timers": false,
      }

  }
};
