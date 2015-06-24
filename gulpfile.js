/**
 * Created by skok on 27/05/15.
 */

'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    hostserver = require('gulp-server-livereload'),
    exec = require('child_process').exec,
    del = require('del'); // rm -rf


// Work build
gulp.task('develop', ['assets', 'watch', 'webserver', 'server']);

// Production build
gulp.task('prod', ['assets', 'webserver', 'server']);

// CSS and static resources build
gulp.task('assets', ['clean-build', 'static', 'sass']);

// Clean build directory before each build
gulp.task('clean-build', function () {
    //del(['./app/build/'], {force: true}, function (err, paths) { // remove directory
    del(['./app/build/**/*.*'], function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('static', function () {
    var fonts = gulp.src('./app/vendors/bootstrap-sass/assets/fonts/**/*')
        .pipe(gulp.dest('./app/build/fonts/'));
});

gulp.task('sass', function () {
    gulp.src('./app/styles/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/build/styles'));
});

gulp.task('server', function (cb) {
    exec('node server/server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function () {
    gulp.watch('./app/styles/**/*.scss', ['sass']); // Watch .scss files
});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(hostserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});