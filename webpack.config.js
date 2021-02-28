const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  externals: {
    'react': 'commonjs2 react',
    'requestanimationframe-timer': 'commonjs2 requestanimationframe-timer',
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    filename: 'scrollchor.js',
    path: path.resolve(__dirname, 'lib'),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
