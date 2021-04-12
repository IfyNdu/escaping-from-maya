const ESLintPlugin = require('eslint-webpack-plugin');
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
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
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
        exclude: /\.mod\.(sa|sc)ss$/,
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          require.resolve('css-loader')
        ]
      },
      {
        test: /\.mod\.(sa|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              import: true,
              importLoaders: 1,
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
              url: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new ESLintPlugin(),
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
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },
};