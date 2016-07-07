module.exports = {
  entry: './src/app.js',
  devtool: 'eval',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
