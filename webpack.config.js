const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
	entry: {
		ingredients:'./assets/js/src/Ingredients/index.js',
<<<<<<< HEAD
		editorpicks:'./assets/js/src/EditorPicks/index.js',
=======
		featured_image:'./assets/js/src/FeaturedImage/index.js',
>>>>>>> d483dca... add featured_image to webpack
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