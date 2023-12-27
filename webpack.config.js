const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
 mode: 'development',
 entry: './game.js',
 output: {
  filename: '[name].js', // give each chunk a unique name
  path: path.resolve(__dirname, 'dist'),
 },
 optimization: {
  usedExports: true,
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        mangle: true,
        module: true,
        compress: {
          booleans: true,
          conditionals: true,
          dead_code: true,
          evaluate: true,
        },
      },
    }),
  ],
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        chunks: 'all',
      },
    },
  },
 },
};