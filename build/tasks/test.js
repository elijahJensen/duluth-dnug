// var gulp      = require('gulp');
// var gutil     = require('gulp-util');
// var karma     = require('karma').server;
// var Path      = require('path');
// var _         = require('underscore');
// 
// var runnerConf = {
//   configFile: Path.join(process.cwd(), './build/karmaconfig'),
//   singleRun: false
// };
// 
// var testReqs = [];
// 
// gulp.task('test', testReqs, function(done) {
//   runnerConf.singleRun = true;
//   karma.start(runnerConf, function(err) {
//     if (err !== 0) {
//       return done(new gutil.PluginError('test', 'Karma exited with a non-0 status code.'));
//     }
//     done();
//   })
// });
// 
// gulp.task('tdd', testReqs, function(done) {
//   karma.start(runnerConf, done)
// });
