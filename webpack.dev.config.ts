import path from 'path';
import type { Configuration as WebpackConfiguration } from 'webpack';
import { HotModuleReplacementPlugin } from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';

import ENV_VAR from './src/utils/env_variable';
import baseConfig from './webpack.base';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
  },
  plugins: [new HotModuleReplacementPlugin()],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    historyApiFallback: true,
    port: ENV_VAR.PORT,
    open: true,
    hot: true,
  },
};

export default merge<Configuration>(baseConfig, config);
