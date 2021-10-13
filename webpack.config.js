const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmwh/react-refresh-webpack-plugin')
const { Template } = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'poduction';

module.exports = {
    mode: isDevelopment ? 'development' : 'poduction' ,
    devtool: isDevelopment ?  'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            Template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, 
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    }
};
