const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const JsdocWebpackPlugin = require('jsdoc-webpack-plugin');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, '../packages'),
    entry: {
        dataset: './router.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../lib'),
        publicPath: "./lib/",
        library: "Dataset",
        libraryTarget: "commonjs2",
        chunkFilename: "[id].js",
        // libraryExport: "default"
    },
    externals: [WebpackNodeExternals()],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ['vue-style-loader', {loader: 'css-loader'}],
                        scss: ['vue-style-loader', {loader: 'sass-loader'}],
                    }
                }
            },
            {
                test: /\.(jsx?|babel|es6)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader',"css-loader"]
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', "css-loader", "sass-loader"]
            },
            {
                test: /\.sass$/,
                use: ["style-loader", "sass-loader"]
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            {from: 'theme', to: 'theme'}
        ]),
        new JsdocWebpackPlugin({
            conf: './jsdoc.conf.json'
        })
    ]
};
