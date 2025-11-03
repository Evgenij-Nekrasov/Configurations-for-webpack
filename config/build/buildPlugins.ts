import webpack, { DefinePlugin } from 'webpack';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/types';

export default function buildPlugins({
  mode,
  paths,
  platform,
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
    // new ForkTsCheckerWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    isDev && new webpack.ProgressPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    !isDev &&
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
  ].filter(Boolean);
}
