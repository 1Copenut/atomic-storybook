const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader"
				})
			},
			
			{
		        test: /\.(gif|png|jpe?g|svg)$/i,
		        use: [
		        	'file-loader',
		        	'image-webpack-loader'
		    	]
		    }
		]
	},

	plugins: [
		new webpack.LoaderOptionsPlugin({
			test: /\.css$/,
			options: {
				postcss: [
					require('postcss-import')({ addDependencyTo: webpack }),
					require('postcss-cssnext'),
					require('postcss-mixins'),
					require('postcss-nested'),
					require('postcss-selector-not'),
					require('postcss-discard-comments'),
					require('postcss-reporter'),
					require('immutable-css')
				]
			}
		}),
		new StyleLintPlugin({
			files: './src/stories/**/*.css'
		}),
		new ExtractTextPlugin("main.css")
	]
}
