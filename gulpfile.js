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
    del = require('del'), // rm -rf
    runSequence = require('run-sequence'),
    webpack = require('webpack');

// folder path
var srcPath = __dirname + '/app',
    buildPath = __dirname + '/app/build', // TODO: Move to level up;
    webpackConfig = require("./webpack.config.js");

// Work build
gulp.task('develop', ['assets', 'watch', 'webserver', 'server']);

// Production build
gulp.task('prod', ['assets', 'webserver', 'server']);

// CSS and static resources build
gulp.task('assets', ['clean-build'], function (cb) {
    runSequence('static', ['sass', 'webpack:build'], cb);
});

// Clean build directory before each build
gulp.task('clean-build', function () {
    del([buildPath + '/**/*.*'], function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('webpack:build', function (cb) {
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function (err, stats) { cb(); });
});

// Copy static resources to build folder
gulp.task('static', function () {
    // TODO: Find how to copy fonts without bootstrap folder
    gulp.src(srcPath + '/vendors/bootstrap-sass/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(gulp.dest(buildPath + '/fonts'));
});

gulp.task('sass', function () {
    gulp.src(srcPath + '/styles/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildPath + '/styles'));
});

gulp.task('server', function (cb) {
    exec('node server/server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function () {
    gulp.watch(srcPath + '/styles/**/*.scss', ['sass']); // Watch .scss files
    gulp.watch(srcPath + '/scripts/**/*.js', ['webpack:build']); // Watch .scss files
});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(hostserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});