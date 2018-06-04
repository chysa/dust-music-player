const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development', //开发环境
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: 'dust',
        hot: true,
        inline: false
    }
});