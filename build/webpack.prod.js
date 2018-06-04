const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'production',//生产环境
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,//源代码映射为最小化代码或者为uglifyjs警告提供正确的行号
        })
    ],
    optimization: {
        splitChunks: {
            name: 'dust'
        }
    }
})