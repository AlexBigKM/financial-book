const path = require('path')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const HTMLWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = {
//     mode: "development",
//     entry: ["./src/index.jsx"],
//     output: {
//        path: path.resolve(__dirname, "dist"),
//         filename: "[name].[hash].js"
//     },
//     devServer: {
//         port: 3000
//     },
//     plugins: [
//         new HTMLWebpackPlugin({template: "./public/index.html"}),
//         new CleanWebpackPlugin()
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(css)$/,
//                 use: ["style-loader", "css-loader"]
//             },
//             {
//                 test: /\.(jpg|jpeg|png|svg|ico)/,
//                 use: ["file-loader"]
//             },
//             {
//                 test: /\.js?$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-plugin-syntax-jsx"]
//                     }
//                 }
//             },
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-plugin-syntax-jsx"]
//                     }
//                 }
//             }
//         ]
//     }
// }

 function buildConfig (_env, argv) {
    const isProduction = true;
    const isDevelopment = !isProduction;

    return {
        devtool: isDevelopment && 'cheap-module-source-map',
        entry: ["./src/index.jsx"],
        output: {
            path: path.resolve(__dirname, '..', 'build'),
            filename: 'static/js/[name].[contenthash:8].js',
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? 'production' : 'development',
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: { loader: 'url-loader' },
                },
                {
                    test: /.svg$/,
                    exclude: /node_modules/,
                    loader: 'svg-url-loader',
                    options: { noquotes: true, encoding: 'base64' },
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: require.resolve('file-loader'),
                    options: { name: 'assets/fonts/[name].[ext]' },
                },
                {
                    test: /\.mp4$/,
                    loader: require.resolve('file-loader'),
                    options: { name: "assets/video/[name].[ext]" }
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            // alias: {
            //     assets: path.resolve(__dirname, '..', 'src', 'assets'),
            //     common: path.resolve(__dirname, '..', 'src', 'common'),
            //     admin: path.resolve(__dirname, '..', 'src', 'admin'),
            //     marketplace: path.resolve(__dirname, '..', 'src', 'marketplace'),
            //     themes: path.resolve(__dirname, '..', 'src', 'themes'),
            // },
        },
        plugins: [
            isProduction &&
            new MiniCssExtractPlugin({
                filename: 'assets/css/[name].[contenthash:8].css',
                chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
            }),
            new HtmlWebpackPlugin({
                title: 'Financial book',
                template: 'public/index.html',
            }),
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(dotenv.config().parsed),
            }),
            // new CopyWebpackPlugin({
            //     patterns: [
            //         { from: 'src/common/index.css', to: 'index.css' },
            //         { from: 'public/favicon.ico', to: 'favicon.ico' },
            //         { from: 'public/manifest.json', to: 'manifest.json' },
            //         { from: 'public/logo192.png', to: 'logo192.png' },
            //         { from: 'public/logo512.png', to: 'logo512.png' },
            //     ],
            // }),
        ].filter(Boolean),
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: { comparisons: false },
                        mangle: { safari10: true },
                        output: { comments: false, ascii_only: true },
                        warnings: false,
                    },
                }),
                new OptimizeCssAssetsPlugin(),
            ],
        },
        devServer: {
            port: 3000,
            compress: false,
            historyApiFallback: true,
        },
        mode: isDevelopment ? 'development' : 'production',
    };
};

module.exports = buildConfig()