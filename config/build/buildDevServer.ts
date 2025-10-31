import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/types';

export default function buildDevServer(
  options: BuildOptions,
): WebpackDevServerConfiguration {
  return {
    port: options.port ?? 3000,
    hot: true,
    historyApiFallback: true,
  };
}
