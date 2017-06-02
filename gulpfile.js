var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var connect = require('gulp-connect');
var copy = require('gulp-copy');
var sass = require('gulp-ruby-sass');

// Run webpack
gulp.task('webpack', function(){
  return gulp.src('src/app.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/js/'))
    .pipe(connect.reload());
});

// Run the webserver
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'public'
  });
});

// Copy index.html file
gulp.task('build.index', function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'));
});

// Compile Sass files and add Normalize.css
gulp.task('styles', function(){
    sass(['./src/sass/timeline.scss', './src/sass/styles.scss'], {
        style: 'compressed'
        })
        .on('error', sass.logError)
        .pipe(gulp.dest('./public/css'))
});

// // Add icon fonts
// gulp.task('fonts', function() {
//   return gulp.src('./node_modules/font-awesome/fonts/*')
//     .pipe(gulp.dest('./public/icons/fonts'))
// })
//
// // Add icon fonts styles
// gulp.task('fonts-styles', function() {
//   return gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
//     .pipe(gulp.dest('./public/icons/css/'))
// })

// Default task
gulp.task('default', ['webpack', 'webserver', 'styles', 'build.index']);
