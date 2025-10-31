import webpack from 'webpack';

import { buildWebpack } from './config/build/buildWebpack';
import { BuildPaths, Mode } from './config/build/types/types';
import path from 'path';

interface EnvVarialbes {
  mode: Mode;
  port: number;
}

export default (env: EnvVarialbes) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode,
    paths: {
      entry: paths.entry,
      output: paths.output,
      html: paths.html,
      src: paths.src,
    },
    port: env.port,
  });

  return config;
};
