const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const fallbackApi = require('connect-history-api-fallback');

module.exports = {
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
					loader: "babel-loader",
					exclude: "/node_modules/"
				},
				{
					test: /\.s?css$/,
					loader: ['style-loader', 'css-loader', 'sass-loader']
				},
				// {
				// 	test: /\.(gif|png|jpe?g|svg)$/i,
				// 	use: [
				// 		'file-loader',
				// 		{
				// 			loader: 'image-webpack-loader',
				// 			options: {
				// 				bypassOnDebug: true, // webpack@1.x
				// 				disable: true, // webpack@2.x and newer
				// 			},
				// 		},
				// 	],
				// },
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
