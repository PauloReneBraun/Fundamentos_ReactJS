const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
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
