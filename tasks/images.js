var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

var conf = require('./config.json');
console.log(conf.src.image.folder)

module.exports = function (gulp, plugins) {
  return function () {
	  return gulp.src(conf.src.image.folder + '*')
	    .pipe(imagemin({
	      progressive: true,
	      svgoPlugins: [{removeViewBox: false}],
	      use: [pngquant({quality: conf.dest.image.quality, speed: 4})]
	    }))
	    .pipe(gulp.dest(conf.dest.image.folder));
	}
};