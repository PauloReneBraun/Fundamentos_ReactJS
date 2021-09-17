const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {

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
