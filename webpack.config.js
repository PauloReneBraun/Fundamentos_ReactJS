const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: {},
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
