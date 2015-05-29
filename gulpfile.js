/**
 * Created by skok on 27/05/15.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    rimraf = require('rimraf'),
    server = require('gulp-server-livereload');

// Default Task
gulp.task('default', ['assets']);

gulp.task('assets', ['clean-build'], function () {
    gulp.start('static'); // TODO: why start unresolved function?
    gulp.start('sass');
});

// Clean build directory before each build
gulp.task('clean-build', function (cb) {
    rimraf('./app/build', cb);
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
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/build/styles'));
});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});