const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

const isDevelopment = process.env.NODE_ENV

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map' ,
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
            }
        ],
    }
};
