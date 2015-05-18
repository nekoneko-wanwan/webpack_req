var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConf = require('./webpack.config.js');


gulp.task('build', function() {
	return gulp.src('')
		.pipe(webpack(webpackConf))
		.pipe(gulp.dest(''));
});

gulp.task("default", ["build"]);
