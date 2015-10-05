var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith');

var conf = require('./config.json');

module.exports = function (gulp, plugins) {
  return function () {
  	var spriteData = gulp.src(conf.src.sprite.folder + '/*.png').pipe(spritesmith({
	    imgName: conf.dest.sprite.img,
	    cssName: conf.dest.sprite.styleName,
	    imgPath: conf.dest.sprite.cssPath,
	    cssTemplate: conf.src.sprite.folder + 'mustacheStr.css.mustache'
	  }));

	  // Pipe image stream through image optimizer and onto disk
	  spriteData.img
	    .pipe(imagemin())
	    .pipe(gulp.dest(conf.dest.sprite.folderImg));

	  spriteData.css
	    .pipe(gulp.dest(conf.dest.sprite.folderStyle));

	  return 
	}
};