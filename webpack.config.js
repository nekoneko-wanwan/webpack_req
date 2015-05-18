module.exports = {
	entry: [
		'./src/lib_jquery.js',
		'./src/_variables.js',
		'./src/_man.js',
		'./src/_animal.js',
		'./src/_bark.js',
		'./src/entry.js'
	],
	output: {
		filename: './build/app.js'
	},
	devtool: "#source-map",
	resolve: {
		extensions: ['', '.js']
	}
};