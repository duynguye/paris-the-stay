const webpack = require('webpack');

module.exports = {
    entry: [
        './src/core.jsx'
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
        publicPath: '/public/'
    },
    resolve: {
        modules: [
            __dirname, 'node_modules'
        ],
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: './public/fonts/[name].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    }
};