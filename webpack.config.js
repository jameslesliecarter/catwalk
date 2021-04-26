const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: '/node_modules/',
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.jsx$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, '/public'),
    watchContentBase: true,
    proxy: {
      '/api': 'http://localhost:9000',
    },
  },
  //watch: true,
  watchOptions: {
    ignored: '/node_modules/',
    aggregateTimeout: 300,
    poll: 1000
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
