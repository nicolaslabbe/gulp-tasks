var gulp = require('gulp'),
		minifyCss = require('gulp-minify-css');
 
var conf = require('./config.json');

module.exports = function (gulp, plugins) {
	return function () {
	  return gulp.src(conf.src.min.folder + '*.css')
			.pipe(minifyCss())
			.pipe(gulp.dest(conf.dest.min.folder));
  }
};