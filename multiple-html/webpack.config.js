const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // generate the file html

module.exports = {
  entry : ['@babel/polyfill', './app-src/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // to keep the name of the image
              outputPath: 'img/', // create a folder inside dist
              publicPath: 'img/' // to access from html (not sure if necessary)
            }
          }
        ]
      },
      {
        test: /\.html$/,
	use: [
	  {
            loader: 'file-loader',
            options: {
	      name: '[name].[ext]'
	    }
	  }
	],
	exclude: path.resolve(__dirname, 'src/index.html')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'layout/index.html'
    }),
  ]
}

