const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsRule = {
	use: {
		loader: 'babel-loader'
	},
	test: /\.(js|jsx)$/,
	exclude: [/node_modules/]
};

const scssRule = {
	test: /\.scss$/,
	use: [
		'style-loader',
		MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				modules: {
					auto: true,
					namedExport: false,
					exportLocalsConvention: 'camelCase'
				}
			}
		},
		{
			loader: 'sass-loader',
			options: {
				api: 'modern',
				implementation: require('sass'),
				sassOptions: {
					style: 'compressed'
				}
			}
		}
	]
};

const imageRule = {
	test: /\.(png|jp(e*)g|svg)$/,
	type: 'asset/resource',
	generator: {
		filename: 'images/[name][ext]'
	}
};

const rules = [jsRule, scssRule, imageRule];

module.exports = rules;
