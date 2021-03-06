const path = require('path');

module.exports = {
	entry: {
		app: './src/index.jsx'
	},
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.png|jpe?g|gif|ttf|woff|woff2|eot|svg$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: 'js/[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
};
