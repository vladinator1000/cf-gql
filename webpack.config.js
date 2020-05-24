const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './src/index.ts',
  target: 'webworker',
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      // hack to get apollo to compile
      fs: path.resolve(__dirname, './src/utils/empty.ts'),
      busboy: path.resolve(__dirname, './src/utils/empty.ts'),
    },
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
      // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
}