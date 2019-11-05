const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


const devMode = process.env.NODE_ENV !== 'production';

module.exports = {

  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: true,
              importLoaders: 1,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
              url: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      filename: devMode ? '[name].css' : '[name].[hash].css'
    })
  ],
  resolve: {
    alias: {
      'global-styles': path.resolve(__dirname, 'src/styles/styles.scss')
    }
  },
};