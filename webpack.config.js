const path = require('path');

module.exports = {
    entry: './frontend/tbo.jsx',
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: './bundle.js',
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            },
        ]
    },
    devtool: false, // set to false for production
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};