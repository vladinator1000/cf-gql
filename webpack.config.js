const path = require('path')

const mode = process.env.NODE_ENV || 'production'

module.exports = {
  entry: './src/index.ts',
  target: 'webworker',
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  mode,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  optimization: {
    usedExports: true,
  },
}