const path = require('path');

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
                loader: 'vue-loader'
            },
            {
                test: /\.(jsx?|babel|es6)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', "css-loader"]
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', "sass-loader"]
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
    }
};
