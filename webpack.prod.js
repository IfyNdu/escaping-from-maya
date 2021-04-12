const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');


module.exports = merge(common, {

  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          },
          mangle: true,
          output: null
        },
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: {
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        defaultVendors: {
          priority: -10,
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/
        }
      },
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].[contentHash].css',
      filename: '[name].[contentHash].css'
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin()
  ]
});