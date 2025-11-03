export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export type Mode = 'development' | 'production';
export type Platform = 'desktop' | 'mobile';

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  platform?: Platform;
  mode: Mode;
}
