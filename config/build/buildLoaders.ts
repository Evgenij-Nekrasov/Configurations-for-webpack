import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/types';

export default function buildLoaders(
  options: BuildOptions,
): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';
  return [
    {
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: isDev
                ? '[path][name]__[local]'
                : '[hash:base64:5]',
            },
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
    {
      test: /\.(png|jpe?g|)$/i,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024,
        },
      },
      generator: {
        filename: 'images/[name][hash][ext][query]',
      },
    },
    {
      test: /\.svg$/i,
      oneOf: [
        // SVG как React-компонент
        {
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        },
        // SVG как обычный файл (URL)
        {
          type: 'asset/resource',
          resourceQuery: /url/,
          generator: {
            filename: 'images/[name][hash][ext][query]',
          },
        },
      ],
    },
    {
      test: /\.css$/i,
      use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ];
}
