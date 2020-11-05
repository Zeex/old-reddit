'use strict';

const gulp = require('gulp');
const zip = require('gulp-zip');

const files = ['manifest.json', 'background.js', 'icons/*.png'];
const xpiName = 'old-reddit.xpi';

gulp.task('default', function() {
    return gulp.src(files, {base: '.'})
        .pipe(zip(xpiName))
        .pipe(gulp.dest('.'));
});
