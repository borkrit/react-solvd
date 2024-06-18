const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports={
    entry:{
        index: path.resolve(__dirname,'./src/index.js')
    },
    output:{
        path: path.resolve(__dirname,'./build'),
        filename:'[name].bundle.js'
    },


    mode:'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./src/index.html'),
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devtool : 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 9004,
        hot: true,
        open: true,
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
}
