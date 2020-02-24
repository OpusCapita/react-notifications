const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'react-notifications': path.resolve(__dirname, '..'),
    }
  },
  entry: {
    bundle: path.resolve(__dirname, './src')
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, './static'),
    publicPath: "",
    library: 'reactNotifications',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './static'),
    overlay: true,
    stats: {
      colors: true
    }
  },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
}
