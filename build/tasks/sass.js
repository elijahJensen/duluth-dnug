var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {

  gulp.src('client/styles/main.scss')
    .pipe(sass({
      loadPath: [
        './node_modules/bootstrap/scss'
      ]
    }))
      .on('error', console.log)
    .pipe(gulp.dest('dist/css'))
});
