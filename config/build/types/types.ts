export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export type Mode = 'development' | 'production';

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: Mode;
}
