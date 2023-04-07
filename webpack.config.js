const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './code/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),//crea la direccion de la carpeta
        filename: 'main.js',
    },
    
    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'static/images/[hash][ext][query]',
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'tester.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns:[{
                from: path.resolve(__dirname, "icons"),
                to: "assets/icons",
            },
            {
                from: path.resolve(__dirname, "logos"),
                to: "assets/logos"
            }
        ]

        })
    ]
}