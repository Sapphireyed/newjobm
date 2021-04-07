const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
var ImageminPlugin = require('imagemin-webpack-plugin').default
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
  gachas: path.resolve(__dirname, './src/gachas.js'),
  gacha: path.resolve(__dirname, './src/gacha.js'),
  dungeonrules: path.resolve(__dirname, './src/gameMechanics/dungeonrules.js'),
  traits: path.resolve(__dirname, './src/gameMechanics/traits.js'),
  unknowns: path.resolve(__dirname, './src/gameMechanics/unknowns.js'),
  combos: path.resolve(__dirname, './src/gameMechanics/combos.js'),
  faq: path.resolve(__dirname, './src/guides/faq.js'),
  guide: path.resolve(__dirname, './src/guides/guide.js'),
  credits: path.resolve(__dirname, './src//credits.js'),
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
      title: "Jobmania",
      filename: 'index.html',
      chunks: ['home',],
    }),
    new HtmlWebpackPlugin({
      title: "jobs",
      filename: 'jobs.html',
      chunks: ['app',],
  //    inject: false ,
    //  preconnect: [
    //    'https://docs.google.com/spreadsheets/d/1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g/edit?usp=sharing',
    //  ]
    }),
    new HtmlWebpackPlugin({
      title: "job",
      filename: 'job.html',
      chunks: ['job'],
    //  inject: false ,
    }),
    new HtmlWebpackPlugin({
      title: "abilities",
      filename: 'abilities.html',
      chunks: ['abilities'],
    }),
    new HtmlWebpackPlugin({
      title: "passives",
      filename: 'passives.html',
      chunks: ['passives'],
    }),
    new HtmlWebpackPlugin({
      title: "glossary",
      filename: 'glossary.html',
      chunks: ['glossary'],
    }),
    new HtmlWebpackPlugin({
      title: "characters",
      filename: 'characters.html',
      chunks: ['characters'],
    }),
    new HtmlWebpackPlugin({
      title: "character",
      filename: 'char.html',
      chunks: ['char'],
    }),
    new HtmlWebpackPlugin({
      title: "chapters",
      filename: 'chapters.html',
      chunks: ['chapters'],
    }),
    new HtmlWebpackPlugin({
      title: "materials",
      filename: 'materials.html',
      chunks: ['mats'],
    }),
    new HtmlWebpackPlugin({
      title: "gachas",
      filename: 'gachas.html',
      chunks: ['gachas'],
    }),
    new HtmlWebpackPlugin({
      title: "gacha",
      filename: 'gacha.html',
      chunks: ['gacha'],
    }),
    new HtmlWebpackPlugin({
      title: "dungeon-rules",
      filename: 'dungeonrules.html',
      chunks: ['dungeonrules'],
    }),
    new HtmlWebpackPlugin({
      title: "traits",
      filename: 'traits.html',
      chunks: ['traits'],
    }),
    new HtmlWebpackPlugin({
        title: "faq",
      filename: 'faq.html',
      chunks: ['faq'],
    }),
    new HtmlWebpackPlugin({
      title: "guide",
      filename: 'guide.html',
      chunks: ['guide'],
    }),
    new HtmlWebpackPlugin({
      title: "credits",
      filename: 'credits.html',
      chunks: ['credits'],
    }),
    new HtmlWebpackPlugin({
      title: "unknowns",
      filename: 'unknowns.html',
      chunks: ['unknowns'],
    }),
    new HtmlWebpackPlugin({
      title: "combos",
      filename: 'combos.html',
      chunks: ['combos'],
    }),
    /*new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    })*/
    new ImageminPlugin({
      disable: true, // Disable during development
      pngquant: {
        quality: '95-100'
      }
    })
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
