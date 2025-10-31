import webpack from 'webpack';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/types';

export default function buildPlugins(
  options: BuildOptions,
): Configuration['plugins'] {
  const isDev = options.mode === 'development';
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    // new BundleAnalyzerPlugin(),
    isDev && new webpack.ProgressPlugin(),
    !isDev &&
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
  ].filter(Boolean);
}
