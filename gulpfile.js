var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    csslint = require('gulp-csslint'),
    prefix = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

gulp.task('scss', function () {
    return gulp.src('src/jquery.skwslider.scss')
        .pipe(sass())
        .pipe(csslint())
        .pipe(cssmin())
        .pipe(rename('jquery.skwslider.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
    return gulp.src('src/jquery.skwslider.js')
        .pipe(jshint())
		.pipe(uglify())
        .pipe(concat('jquery.skwslider.min.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['scss', 'js']);