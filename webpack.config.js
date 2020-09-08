const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const fallbackApi = require('connect-history-api-fallback');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			cache: true,
			parallel: true,
		})],
		splitChunks: {
			chunks: 'all',
			minSize: 20000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: '~',
		}
	},
	entry: './src/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'development',
	module: {
		rules:
			[
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: '/node_modules/'
				},
				{
					test: /\.s?css$/,
					loader: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
				{
					test: /\.svg$/,
					loader: 'svg-sprite-loader'
				}
			]
	},
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			middleware: fallbackApi(),
			route: "/",
			server: { baseDir: ['dist'] }
		})
	]
}
