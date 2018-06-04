const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: {
		app: [path.resolve(__dirname, '../app/index.js')],
		vendor: ['vue', 'babel-polyfill', 'axios', 'vuex', 'vue-router']
	},
	output: {
		filename: '[name].[hash].js',
		// filename:'dust.js',
		path: path.resolve(__dirname, '../dust'),
		library: 'dustsun',
		libraryTarget: 'window'
	},
	plugins: [
		new CleanWebpackPlugin(['dust'], {
            root: path.resolve(__dirname, '../'),
            verbose:true,
            dry:false
		}),
		new webpack.NamedModulesPlugin(),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({
			title: 'dust sun',
			template: path.join(__dirname, '../index.ejs')
		})
	],
	module: {
		rules: [
			// 处理css
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			//处理less
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			//处理sass
			{
				test: /\.sass$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			//处理woff/woff2/ttf/eot/svg
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: 'file-loader'
			},
			//图片处理png/jpg/gif/svg
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: 'url-loader'
			},
			//处理csv/tsv
			{
				test: /\.(csv|tsv)$/,
				use: 'csv-loader'
			},
			//处理xml
			{
				test: /\.xml$/,
				use: 'xml-loader'
			},
			//处理web worker
			{
				test: /\.worker\.js$/,
				use: 'worker-loader'
			},
			{
				test: /\.vue$/,
				include: [path.resolve(__dirname, '../app')],
				exclude: [path.resolve(__dirname, '../node_modules')],
				loader: 'vue-loader'
			},
			//转化ES6代码
			{
				test: /\.(js)$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: [path.resolve(__dirname, '../node_modules')]
			},
			//处理json
			{
				test: /\.special\.json$/,
				use: 'special-loader'
			}
		]
	},
	resolve: {
		//自动解析某些扩展
		extensions: ['.js', '.json', '.vue'],
		//别名
		alias: {
			components: path.resolve(__dirname, '../app/components')
		}
	}
};
