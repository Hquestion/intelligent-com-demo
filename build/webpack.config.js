const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, '../packages'),
    entry: {
        dataset: './Dataset/index.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../lib'),
        publicPath: "",
        library: "Dataset",
        libraryTarget: "commonjs",
        chunkFilename: "[id].js",
        libraryExport: "default"
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        'vue-router': 'vue-router',
        'element-ui': 'element-ui'
    },
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
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ]
};
