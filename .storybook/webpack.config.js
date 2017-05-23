var StyleLintPlugin = require('stylelint-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader'),
			},
			
			{
		        test: /\.(gif|png|jpe?g|svg)$/i,
		        loaders: [
		        	'file-loader',
		        	'image-webpack-loader'
		    	]
		    }
		]
	},

	postcss: function(webpack) {
		return [
			require('postcss-import')({ addDependencyTo: webpack }),
			require('postcss-cssnext'),
			require('postcss-mixins'),
			require('postcss-nested'),
			require('postcss-selector-not'),
			require('postcss-discard-comments'),
			require('postcss-reporter'),
			require('immutable-css'),
		];
	},

	plugins: [
		new StyleLintPlugin({
			files: './src/stories/**/*.css'
		}),
		new ExtractTextPlugin("main.css"),
	],
}
