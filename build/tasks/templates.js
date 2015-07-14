var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('templates', function () {
	return gulp.src('client/**/*.html')
		.pipe(templateCache({
			standalone: true,
			moduleSystem: 'Browserify'
		}))
		.pipe(gulp.dest('client/'));
});