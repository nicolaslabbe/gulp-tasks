var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    plugins = require('gulp-load-plugins')();

var conf = require('./tasks/config.json');

gulp.task('image', require('./tasks/images')(gulp, plugins));
gulp.task('sass', require('./tasks/sass')(gulp, plugins));
gulp.task('sprite', require('./tasks/sprite')(gulp, plugins));
gulp.task('prefix', require('./tasks/prefix')(gulp, plugins));
gulp.task('min', require('./tasks/min')(gulp, plugins));

gulp.task('default', ['image', 'sprite', 'sass' , 'prefix'], function() {
  livereload.listen();
  gulp.watch(conf.dest.folder + '*.html').on('change', livereload.changed);
  gulp.watch(conf.src.image.folder + '*', ['image']).on('change', livereload.changed);
  gulp.watch(conf.src.sprite.folder + '*', ['sprite']).on('change', livereload.changed);
  gulp.watch(conf.src.sass.folder + '**/*.sass', ['sass']);
  gulp.watch(conf.src.prefix.folder + '**/*.css', ['prefix']);
});

gulp.task('production', ['image', 'sprite', 'sass', 'prefix', 'min']);