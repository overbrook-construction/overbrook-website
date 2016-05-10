'use strict';

let gulp = require('gulp');
let webpack = require('gulp-webpack');
let rename = require('gulp-rename');
let del = require('del');
let sass = require('gulp-sass');
//PATHS
let jsPaths = ['*.js', 'app/**/*.js'];
let viewPaths = ['app/**/*.html'];
let sylePaths = ['app/style/*.scss'];
let mediaPaths = ['app/img/*'];
//OUTPUT LOCATION
let output = __dirname + '/public/';

gulp.task('del-public', () => {
  return gel.sync([
    output + '*'
  ])
});

gulp.task('copy-html', () => {
  gulp.src(htmlPaths)
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(output));
});

gulp.task('copy-media', () => {
  gulp.src(mediaPaths)
    .pipe(rename({dirname: '/media'}))
    .pipe(gulp.dest(output));
});

gulp.task('webpack', () => {
  return gulp.src(__dirname + '/app/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(output));
});

gulp.task('sass', function() {
  return gulp.src(stylePaths)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output + 'css'));
});

gulp.task('watch', () =>{
  gulp.watch(stylePaths, ['sass']);
  gulp.watch(jsPaths, ['webpack']);
  gulp.watch(viewsPaths, ['copy-html']);
  gulp.watch(mediaPaths, ['copy-media']);
});

// gulp.task('bundle:test', () => {
//   return gulp.src(__dirname + '/tests/karma-testing.js')
//   .pipe(webpack({output: {filename: 'test_bundle.js'},
//   watch: true
// }))
//   .pipe(gulp.dest('./tests'));
// });

gulp.task('default', ['del-public', 'webpack', 'copy-html', 'copy-media', 'sass', 'watch']);
