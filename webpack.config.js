const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");

const wpMode = "development"
const root = wpMode === "production" ? "https://tai-abrahams.io/new-covenant-church" : "http:localhost:3000/new-covenant-church" ///change to a function to take in extention of new-cov
 
module.exports = {
    // define entry file and output
    entry: './src/index.js',
    mode:"development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: "https://tai-abrahams.github.io/new-covenant-church/dist"
    },
    devServer: {
        port: 3000,
        open: "Google Chrome",
        historyApiFallback: true,
        public:'localhost:3000/new-covenant-church',
        publicPath: '/new-covenant-church/dist'
      },
    // define babel loader
    module: {
        rules: [
            { test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
              },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ],
      
   }, 
   plugins: [
       new CleanWebpackPlugin(),
       new HTMLWebpackPlugin({
        filename:"index.html",
        template: 'index.html'
    })
   ]
};