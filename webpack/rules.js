const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsRule = {
	use: {
		loader: 'babel-loader'
	},
	test: /\.(js|jsx)$/,
	exclude: [/node_modules/]
};

const cssRule = {
	test: /\.css$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader
		},
		'css-loader'
	]
};

const rules = [jsRule, cssRule];

module.exports = rules;
