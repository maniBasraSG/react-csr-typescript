import path from 'path';
import type { Configuration } from 'webpack';
import merge from 'webpack-merge';
import { InjectManifest } from 'workbox-webpack-plugin';

import baseConfig from './webpack.base';

const config: Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  name: 'bundle',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  plugins: [
    new InjectManifest({
      swSrc: './src/service-worker/serviceWorkerWorkbox.js',
      swDest: 'service-worker.js',
    }),
  ],
};

export default merge<Configuration>(baseConfig, config);
