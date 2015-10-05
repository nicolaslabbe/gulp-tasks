var gulp = require('gulp'),
		livereload = require('gulp-livereload'),
		autoprefixer = require('gulp-autoprefixer');
 
var conf = require('./config.json');

module.exports = function (gulp, plugins) {
	return function () {
	  return gulp.src(conf.src.prefix.folder + conf.src.prefix.file)
	    .pipe(autoprefixer())
	    .pipe(gulp.dest(conf.dest.prefix.folder))
	    .pipe(livereload());
  }
};