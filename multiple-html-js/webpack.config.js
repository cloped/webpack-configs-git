const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { // put multiple entrys to choose the specific chunks 
        app: "./src/scripts/app.js",
        settings: "./src/scripts/settings.js"
    }, 
    output: {
        filename: "[name].bundle.js" 
	path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['vendor', 'app'],
            filename: 'index.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['vendor', 'settings'],
            filename: 'settings.html' 
        })
   ]
}

