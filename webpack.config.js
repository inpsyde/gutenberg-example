const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
	entry: {
		ingredients:'./assets/js/src/Ingredients/index.js',
		featured_image:'./assets/js/src/FeaturedImage/index.js',
	},
	output: {
		filename:'./assets/js/dist/[name].js'
	},
	module: {
		rules: [
			{
				use: {
					loader: 'babel-loader',
				},
			}
		],
	}
};