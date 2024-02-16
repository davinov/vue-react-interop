import { VueLoaderPlugin } from 'vue-loader';
import type { Configuration } from 'webpack';
import 'webpack-dev-server';

export default {
  mode: 'development',
  entry: './src/index.ts',

  devServer: {
    static: './public',
    port: 7777,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },

      {
        test: /\.(j|t)sx?$/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2019',
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    // @ts-ignore
    new VueLoaderPlugin(),
  ],
} satisfies Configuration;
