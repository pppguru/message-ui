var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
  entry: './client/entry.js',
  devTool: 'eval-source-map',
  output: {
      path: './public/',
      filename: 'dist/bundle.js'
  },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.(scss|css)$/,
          loader: 'style!css!sass!postcss?parser=postcss-scss'
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          exclude: /node_modules/,
          include: /client/,
          loader: 'url-loader?limit=8192&name=fonts/[name].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=img/[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          include: /client/,
          loader: 'url-loader?limit=10240?name=img/[name].[ext]'
        }, 
        {
          test: /\.font.js$/,
          include: path.resolve(__dirname, "client/assets/iconfont"),
          loader: "style-loader!url-loader!file-loader!file?name=iconfont.css!fontgen?formats=woff,eot,ttf&fileName=iconfont/iconfont[ext]"
        }        
      ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 5 versions'] })]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ],
  resolve: {
    modulesDirectories: [
      'client',
      'public',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
};

