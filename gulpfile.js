function defaultTask(cb) {
    var gulp = require('gulp');
    var sassGlob = require('gulp-sass-glob');

    gulp.task('styles', function () {
        return gulp
            .src('scss/main.scss')
            .pipe(sassGlob())
            .pipe(sass())
            .pipe(gulp.dest('css'));
    });
    cb();
  }
  
  exports.default = defaultTask