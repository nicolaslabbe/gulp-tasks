var gulp = require('gulp'),
		livereload = require('gulp-livereload'),
		plumber = require('gulp-plumber'),
		gutil = require('gulp-util'),
    sass = require('gulp-sass');

var conf = require('./config.json');

var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

module.exports = function (gulp, plugins) {
  return function () {
  	var stream = gulp.src(conf.src.sass.folder + conf.src.sass.file);

		stream.pipe(plumber({
			errorHandler: function(err) {
				onError(err);
				stream.end();
			}
		}))
    .pipe(sass({
    	indentedSyntax: true,
    	sourceComments: 'normal'
    }))
    .pipe(gulp.dest(conf.dest.sass.folder))
    .pipe(livereload());

	  return stream
	}
};
