import type {Configuration} from 'webpack';
import 'webpack-dev-server';

export default {
  mode: 'development',
  entry: './src/index.ts',

  devServer: {
    static: './public',
    port: 7777
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
} satisfies Configuration;
