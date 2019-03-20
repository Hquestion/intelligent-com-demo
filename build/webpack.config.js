const path = require('path');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, '../packages'),
    entry: {
        dataset: './packages/dataset/index.js'
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
        'vue': 'vue',
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
            }
        ]
    }
};
