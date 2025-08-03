const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const plugins = [
	new MiniCssExtractPlugin({ filename: '[name].css' }),
	new WebpackAssetsManifest({
		output: '../build/webpack.manifest.json',
		publicPath: '../build'
	})
];

module.exports = plugins;
