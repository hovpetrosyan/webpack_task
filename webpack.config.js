const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
var path = require('path');
const webpack = require('webpack');
module.exports = {
	watch:true,
	mode:'development',
	entry:'./src/scripts/index.js',
	output:{
		path:path.resolve(__dirname,'./build'),
		filename:'index.bundle.js'
	},
	module:{
		rules:[
		{test:/\.js$/,
			exclude:/node_modules/,
			use:{
				loader:"babel-loader"
			}
		},
		{
			test:/\.less$/,use:[{loader:ExtractCssChunks.loader},{loader:'css-loader'},{loader:'less-loader'}]
		}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({template:'./src/index.html'}),
		new ExtractCssChunks(
			{
			  // Options similar to the same options in webpackOptions.output
			  // both options are optional
			  path:path.resolve(__dirname,'./build'),
			  filename: "style.css",
			  //chunkFilename: "[id].css",
			  hot: true // optional is the plguin cannot automatically detect if you are using HOT, not for production use
			}),
		new webpack.HotModuleReplacementPlugin()
	]
};