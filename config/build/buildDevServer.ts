import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import path from 'path';
import { BuildOptions } from './types/types';

export default function buildDevServer(
  options: BuildOptions,
): WebpackDevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  };
}
