//https://jhinter.medium.com/setting-up-gulp-to-compile-scss-in-less-than-5-minutes-fee8bea2b68b
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var wait = require('gulp-wait');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('../scss/**/*.scss')
     .pipe(concat('../scss/style2.scss'))
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('../css'));
});

function style() {

   return gulp.src('../scss/**/*.scss')
     //.pipe(concat('../scss/style.scss'))
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(sourcemaps.write('.'))
     //décommenter pour compresser la CSS production! et commenté sourcemap juste en haut
     // .pipe(sass({outputStyle: 'compressed'}))
     .pipe(gulp.dest('../css'));
}



exports.style = style;
gulp.task('sass:watch', function () {
   gulp.watch('../scss/**/*.scss', gulp.series('style'));

});
